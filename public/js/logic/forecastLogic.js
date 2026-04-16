import { state } from "../state.js";

export function getForecasts() {
  if (!state.courses || !state.courses.length) {
    return [];
  }

  return state.courses.map(c => ({
    courseCode: c.code,
    risk: "medium",
    riskLabel: "Medium",
    fillTime: "Within first day",
    recommendation: "Register on day one."
  }));
}
