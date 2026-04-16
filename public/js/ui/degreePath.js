import { getDegreePlanView } from "../logic/degree.js";

export function renderDegreePath(root) {
  const view = getDegreePlanView();

  root.innerHTML = `
    <section class="panel">
      <h2>Degree Path</h2>
      <p>See your multi-term plan and how changes affect graduation.</p>
      <div class="card-grid">
        ${
          view.terms && view.terms.length
            ? view.terms
                .map(
                  term => `
          <article class="card">
            <h3>${term.label}</h3>
            <p>Status: ${term.status}</p>
            <ul>
              ${term.courses
                .map(c => `<li>${c.code} - ${c.title}</li>`)
                .join("")}
            </ul>
          </article>`
                )
                .join("")
            : `<article class="card"><p>No degree plan data yet.</p></article>`
        }
      </div>
    </section>
  `;
}
