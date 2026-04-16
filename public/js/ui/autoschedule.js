import { buildSchedules } from "../logic/scheduleBuilder.js";

export function renderAutoschedule(root) {
  const schedules = buildSchedules();

  root.innerHTML = `
    <section class="panel">
      <h2>Auto-Schedule</h2>
      <p>Generated conflict-free schedules based on your sections.</p>

      <div class="card-grid">
        ${
          schedules.map((sched, i) => `
            <article class="card">
              <h3>Option ${i + 1}</h3>
              <ul>
                ${
                  sched.items.length
                    ? sched.items.map(it => `
                        <li>${it.courseCode} (${it.days.join("/")}, ${it.startTime}-${it.endTime})</li>
                      `).join("")
                    : "<li>No classes in this option.</li>"
                }
              </ul>
              <p>Score: ${sched.score}</p>
            </article>
          `).join("")
        }
      </div>
    </section>
  `;
}
