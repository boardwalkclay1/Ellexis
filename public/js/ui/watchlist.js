import { state } from "../state.js";
import { toggleWatchItem } from "../logic/availability.js";

export function renderWatchlist(root) {
  const list = state.watchlist;

  root.innerHTML = `
    <section class="panel">
      <h2>Watchlist</h2>
      <p>Real-time seat tracking for your starred classes.</p>

      <div class="card-grid">
        ${
          list.length
            ? list.map(item => `
              <article class="card ${item.status}">
                <header style="display:flex;justify-content:space-between;align-items:center;">
                  <h3>${item.courseCode} - ${item.section}</h3>
                  <button class="star" data-crn="${item.crn}">★</button>
                </header>
                <p>Seats: ${item.seatsAvailable}/${item.capacity}</p>
                <p>Waitlist: ${item.waitlist}</p>
                <p>Status: ${item.status}</p>
              </article>
            `).join("")
            : `<article class="card"><p>No watchlist items yet.</p></article>`
        }
      </div>
    </section>
  `;

  root.querySelectorAll(".star").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleWatchItem(btn.dataset.crn);
      renderWatchlist(root);
    });
  });
}
