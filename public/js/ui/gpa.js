import { getGpaProjection } from "../logic/gpaLogic.js";

export function renderGpa(root) {
  const proj = getGpaProjection();

  root.innerHTML = `
    <section class="panel">
      <h2>GPA & Projections</h2>

      <div class="card">
        <p>Current GPA: ${proj.current}</p>
        <p>Target GPA: ${proj.target}</p>
        <p>Needed this term: ${proj.requiredPattern}</p>
      </div>
    </section>
  `;
}
