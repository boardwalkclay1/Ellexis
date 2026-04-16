import { buildSchedules } from "../logic/scheduleBuilder.js";

export function renderAutoschedule(root) {
  const schedules = buildSchedules();

  root.innerHTML = `
    <section class="panel">
      <h2>Auto-Schedule</h2>
      <p>We generate conflict-free schedules based on your preferences and available sections.</p>
      ${
        schedules && schedules.length
          ? `<div class="card-grid">
              ${schedules
                .map(
                  (sched, i) => `
                <article class="card">
                  <h3>Option ${i + 1}</h3>
                  <ul>
                    ${
                      sched.items && sched.items.length
                        ? sched.items
                            .map(
                              it =>
                                `<li>${it.label || it.courseCode} (${(it.days || []).join(
                                  "/"
                                )}, ${it.startTime || "?"}-${it.endTime || "?"})</li>`
                            )
                            .join("")
                        : "<li>No classes in this option yet.</li>"
                    }
                  </ul>
                  <p>Score: ${sched.score}</p>
                </article>`
                )
                .join("")}
            </div>`
          : `<article class="card"><p>No schedules could be generated yet.</p></article>`
      }
    </section>
  `;
}
