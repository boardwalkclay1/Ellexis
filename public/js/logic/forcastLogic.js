import { state } from "../state.js";

/**
 * Very simple placeholder forecast.
 * Later: use historical snapshots stored locally.
 */
export function getForecasts() {
  if (!state.courses || !state.courses.length) {
    return [
      {
        courseCode: "CSCI 1302",
        risk: "high",
        riskLabel: "High",
        fillTime: "2 hours after registration opens",
        recommendation: "Register as early as possible."
      }
    ];
  }

  return state.courses.map(c => ({
    courseCode: c.code,
    risk: "medium",
    riskLabel: "Medium",
    fillTime: "Within first day",
    recommendation: "Register on day one."
  }));
}
