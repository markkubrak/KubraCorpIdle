// Leveling rules. Placeholder curve: one level per 10 XP (same as the vanilla game).
// Step 3 of the roadmap replaces this with an OSRS-style XP table.

export const XP_PER_LEVEL = 10;

export function levelFromXp(xp) {
  return 1 + Math.floor(xp / XP_PER_LEVEL);
}
