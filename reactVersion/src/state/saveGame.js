import { resources } from "../data/gameData";
import { initialState } from "./gameReducer";

// Saving and loading the game. Plain JS, no React.
//
// Save format (stored as JSON in localStorage):
//   { version, savedAt, state }
//
// version  - the save format. Bump SAVE_VERSION whenever the shape of the game
//            state changes, and add a migration for the old version.
// savedAt  - ms timestamp of the save. Not used yet (offline progress will use it).
// state    - the game state from gameReducer (ids and numbers only).

export const SAVE_KEY = "kubraCorpIdleSave";
export const SAVE_VERSION = 1;

// Migrations upgrade a saved state by one version: migrations[n] turns a
// version n state into a version n + 1 state. Example for later:
//   migrations[1] = (state) => ({ ...state, inventory: {} });
const migrations = {};

function getStorage() {
  // Accessing localStorage can throw (blocked site data, private windows).
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Builds a state with exactly the shape of `defaults`, taking values from
// `saved` only when they are valid. Missing keys get defaults (so adding a new
// skill later never breaks old saves); unknown keys are dropped.
function mergeOntoDefaults(defaults, saved) {
  const source = isPlainObject(saved) ? saved : {};
  const result = {};

  for (const [key, defaultValue] of Object.entries(defaults)) {
    const savedValue = source[key];

    if (isPlainObject(defaultValue)) {
      result[key] = mergeOntoDefaults(defaultValue, savedValue);
    } else if (typeof defaultValue === "number") {
      result[key] =
        Number.isFinite(savedValue) && savedValue >= 0 ? savedValue : defaultValue;
    } else if (defaultValue === null) {
      // Nullable id field (e.g. `gathering`): a string or null.
      result[key] = typeof savedValue === "string" ? savedValue : null;
    } else {
      result[key] = defaultValue;
    }
  }

  return result;
}

export function applyMigrations(
  version,
  state,
  table = migrations,
  target = SAVE_VERSION,
) {
  let current = state;
  for (let v = version; v < target; v++) {
    if (typeof table[v] !== "function") {
      throw new Error(`No migration from save version ${v}`);
    }
    current = table[v](current);
  }
  return current;
}

export function saveGame(state, storage = getStorage(), now = Date.now()) {
  if (!storage) return false;
  try {
    const save = { version: SAVE_VERSION, savedAt: now, state };
    storage.setItem(SAVE_KEY, JSON.stringify(save));
    return true;
  } catch {
    return false; // storage full or blocked; the game keeps running unsaved
  }
}

// Returns the saved game state, or a fresh game if there is no usable save.
// Never throws. Written to be passed straight to useReducer as its init function.
export function loadGame(storage = getStorage()) {
  if (!storage) return initialState;

  try {
    const raw = storage.getItem(SAVE_KEY);
    if (raw === null) return initialState;

    const save = JSON.parse(raw);
    if (!isPlainObject(save) || !Number.isInteger(save.version)) {
      return initialState;
    }
    // A save from a newer version of the game can't be understood by this one.
    if (save.version > SAVE_VERSION || save.version < 1) return initialState;

    const migrated = applyMigrations(save.version, save.state);
    const state = mergeOntoDefaults(initialState, migrated);

    // `gathering` must be a resource that exists.
    if (state.gathering !== null && !(state.gathering in resources)) {
      state.gathering = null;
    }
    return state;
  } catch {
    return initialState;
  }
}
