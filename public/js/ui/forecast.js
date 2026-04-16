export function renderForecast(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>Seat Forecast</h2>
      <p>See how fast classes usually fill and how risky they are.</p>
      <div class="card-grid">
        <article class="card">
          <h3>Example Course</h3>
          <p>Risk: High</p>
          <p>Typical fill time: 2 hours after registration opens.</p>
          <p>Recommendation: Register as early as possible.</p>
        </article>
      </div>
    </section>
  `;
}
