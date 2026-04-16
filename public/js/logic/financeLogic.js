import { state } from "../state.js";

export function getFinanceSummary() {
  const f = state.finance || {};
  return {
    status: f.status || "ok",
    aidStatus: f.aidStatus || "Pending",
    balance:
      f.balance != null ? `$${Number(f.balance).toFixed(2)}` : "$0.00",
    nextDue: f.nextDue || "N/A",
    holds: f.holds || []
  };
}
