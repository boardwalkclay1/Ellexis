import { state } from "../state.js";

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
