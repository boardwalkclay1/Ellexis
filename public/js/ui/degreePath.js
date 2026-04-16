import { getDegreePlanView } from "../logic/degree.js";

export function renderDegreePath(root) {
  const view = getDegreePlanView();

  root.innerHTML = `
    <section class="panel">
      <h2>Degree Path</h2>
      <p>Your multi-term academic plan.</p>

      <div class="card-grid">
        ${
          view.terms.map(term => `
            <article class="card">
              <h3>${term.label}</h3>
              <p>Status: ${term.status}</p>
              <ul>
                ${term.courses.map(c => `<li>${c.code} - ${c.title}</li>`).join("")}
              </ul>
            </article>
          `).join("")
        }
      </div>
    </section>
  `;
}
