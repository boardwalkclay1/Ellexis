import { state } from "../state.js";

export function renderDashboard(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>Welcome, ${state.profile.name}</h2>
      <p>Your major: ${state.profile.major} · Target grad: ${state.profile.targetGrad}</p>

      <div class="card-grid">
        <article class="card">
          <h3>Today</h3>
          <p>Schedule overview and conflicts (coming soon).</p>
        </article>

        <article class="card">
          <h3>Next Term Plan</h3>
          <p>Build and compare schedules with real-time seat tracking.</p>
        </article>

        <article class="card">
          <h3>Alerts</h3>
          <p>Holds, financial aid, and registration reminders.</p>
        </article>
      </div>
    </section>
  `;
}
