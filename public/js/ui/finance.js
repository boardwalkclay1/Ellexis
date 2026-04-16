import { getFinanceSummary } from "../logic/financeLogic.js";

export function renderFinance(root) {
  const f = getFinanceSummary();

  root.innerHTML = `
    <section class="panel">
      <h2>Financial Aid & Billing</h2>
      <div class="card ${f.status}">
        <p>Aid status: ${f.aidStatus}</p>
        <p>Balance: ${f.balance}</p>
        <p>Next due date: ${f.nextDue}</p>
        <p>Holds: ${f.holds.length ? f.holds.join(", ") : "None"}</p>
      </div>
    </section>
  `;
}
