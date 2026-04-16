import { state } from "../state.js";
import { hasConflict } from "./conflicts.js";

/**
 * Build candidate schedules from planned sections.
 * For now, returns a simple placeholder structure.
 */
export function buildSchedules() {
  const items = state.sections || [];
  if (!items.length) {
    return [
      {
        items: [],
        score: 0
      }
    ];
  }

  // TODO: generate combinations by course, filter conflicts, score by preferences.
  const noConflict = items.filter(
    (item, idx) => !items.slice(0, idx).some(other => hasConflict(item, [other]))
  );

  return [
    {
      items: noConflict,
      score: 100
    }
  ];
}
