import { state } from "../state.js";
import { getFinanceSummary } from "../logic/financeLogic.js";
import { getGpaProjection } from "../logic/gpaLogic.js";

export function renderDashboard(root) {
  const finance = getFinanceSummary();
  const gpa = getGpaProjection();

  root.innerHTML = `
    <section class="panel">
      <h2>Welcome, ${state.profile.name}</h2>
      <p>Your major: ${state.profile.major} · Target grad: ${state.profile.targetGrad}</p>

      <div class="card-grid">
        <article class="card">
          <h3>Today</h3>
          <p>Schedule overview and conflicts coming soon.</p>
        </article>

        <article class="card">
          <h3>Financial Snapshot</h3>
          <p>Aid: ${finance.aidStatus}</p>
          <p>Balance: ${finance.balance}</p>
          <p>Next due: ${finance.nextDue}</p>
        </article>

        <article class="card">
          <h3>GPA</h3>
          <p>Current: ${gpa.current}</p>
          <p>Target: ${gpa.target}</p>
          <p>Needed: ${gpa.requiredPattern}</p>
        </article>
      </div>
    </section>
  `;
}
