import { resources, skills } from "../data/gameData";

function zeroed(table) {
  return Object.fromEntries(Object.keys(table).map((id) => [id, 0]));
}

// State is plain data (ids and numbers only) so it can be saved as JSON later.
// Levels are NOT stored; they are derived from xp.
export const initialState = {
  gold: 0,
  gathering: null, // id of the last resource generated, or null
  resources: zeroed(resources),
  xp: zeroed(skills),
};

export function gameReducer(state, action) {
  switch (action.type) {
    case "gather": {
      const resource = resources[action.resource];
      if (!resource) return state;

      return {
        ...state,
        gold: state.gold + 1,
        gathering: action.resource,
        resources: {
          ...state.resources,
          [action.resource]: state.resources[action.resource] + 1,
        },
        xp: {
          ...state.xp,
          [resource.skill]: state.xp[resource.skill] + 1,
        },
      };
    }
    default:
      return state;
  }
}
