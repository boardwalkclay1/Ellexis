import { state } from "../state.js";

/**
 * Summarize financial aid + billing for UI.
 */
export function getFinanceSummary() {
  const f = state.finance || {};
  return {
    status: f.status || "ok", // ok | warning | danger
    aidStatus: f.aidStatus || "Pending",
    balance: f.balance != null ? `$${f.balance.toFixed(2)}` : "$0.00",
    nextDue: f.nextDue || "N/A",
    holds: f.holds || []
  };
}
