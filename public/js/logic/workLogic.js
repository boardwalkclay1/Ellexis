import { state } from "../state.js";
import { hasConflict } from "./conflicts.js";

/**
 * Analyze conflicts between work shifts and class schedule.
 * workShifts: [{ id, label, days, startTime, endTime }]
 * sections: state.sections (class meetings)
 */
export function analyzeWorkConflicts() {
  const shifts = state.workShifts || [];
  const classes = state.sections || [];
  const conflicts = [];

  shifts.forEach(shift => {
    classes.forEach(cls => {
      if (
        shift.days.some(d => cls.days?.includes(d)) &&
        hasConflict(shift, [cls])
      ) {
        conflicts.push({
          shift,
          cls,
          message: `Work shift "${shift.label}" conflicts with ${cls.courseCode} - ${cls.section}.`
        });
      }
    });
  });

  return conflicts;
}
