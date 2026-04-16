import { analyzeWorkConflicts } from "../logic/workLogic.js";

export function renderWorkSync(root) {
  const conflicts = analyzeWorkConflicts();

  root.innerHTML = `
    <section class="panel">
      <h2>Work & Class Sync</h2>
      <p>Detects conflicts between shifts and classes.</p>

      <ul>
        ${
          conflicts.length
            ? conflicts.map(c => `<li class="conflict">${c.message}</li>`).join("")
            : "<li>No conflicts detected.</li>"
        }
      </ul>
    </section>
  `;
}
