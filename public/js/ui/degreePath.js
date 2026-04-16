export function renderDegreePath(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>Degree Path</h2>
      <p>See your 4-year plan and how changes affect graduation.</p>
      <div class="card-grid">
        <article class="card">
          <h3>Year 1 · Fall</h3>
          <p>Example: ENGL 1101, MATH 1111, CSCI 1301...</p>
        </article>
      </div>
    </section>
  `;
}
