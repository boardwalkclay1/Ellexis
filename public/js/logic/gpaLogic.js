import { state } from "../state.js";

/**
 * Basic GPA projection placeholder.
 * Later: compute from completed courses + hypothetical grades.
 */
export function getGpaProjection() {
  const g = state.gpa || {};
  const current = g.current ?? 3.4;
  const target = g.target ?? 3.5;

  return {
    current,
    target,
    requiredPattern: "Mostly A's with one B."
  };
}
