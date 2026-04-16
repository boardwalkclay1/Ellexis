import { analyzeWorkConflicts } from "../logic/workLogic.js";

export function renderWorkSync(root) {
  const conflicts = analyzeWorkConflicts();

  root.innerHTML = `
    <section class="panel">
      <h2>Work & Class Sync</h2>
      <p>We check your shifts against your classes and warn about conflicts.</p>
      <ul>
        ${
          conflicts.length
            ? conflicts
                .map(c => `<li class="conflict">${c.message}</li>`)
                .join("")
            : `<li>No work/class conflicts detected.</li>`
        }
      </ul>
    </section>
  `;
}
