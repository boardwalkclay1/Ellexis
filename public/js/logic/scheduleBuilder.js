import { state } from "../state.js";
import { hasConflict } from "./conflicts.js";

export function buildSchedules() {
  const items = state.sections || [];
  if (!items.length) return [{ items: [], score: 0 }];

  // naive: one schedule with all non-conflicting items
  const schedule = [];
  items.forEach(item => {
    if (!hasConflict(item, schedule)) schedule.push(item);
  });

  return [
    {
      items: schedule,
      score: 100
    }
  ];
}
