import { state } from "../state.js";

export function renderWatchlist(root) {
  const list = state.watchlist || [];
  root.innerHTML = `
    <section class="panel">
      <h2>Watchlist</h2>
      <p>Track seats, waitlists, and changes in your starred classes.</p>
      <div class="card-grid">
        ${
          list.length
            ? list
                .map(
                  item => `
          <article class="card ${item.status || "unknown"}">
            <h3>${item.courseCode} - ${item.section}</h3>
            <p>Seats: ${item.seatsAvailable}/${item.capacity}</p>
            <p>Waitlist: ${item.waitlist}</p>
            <p>Status: ${item.status || "unknown"}</p>
          </article>`
                )
                .join("")
            : `<article class="card"><p>No classes in your watchlist yet.</p></article>`
        }
      </div>
    </section>
  `;
}
