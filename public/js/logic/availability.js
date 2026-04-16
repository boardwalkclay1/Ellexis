import { state } from "../state.js";
import { notify } from "./notificationsLogic.js";

export function updateAvailabilityFromScrape(sections) {
  const old = state.sections;
  state.sections = sections;

  sections.forEach(sec => {
    const prev = old.find(o => o.crn === sec.crn);
    if (!prev) return;
    if (prev.seatsAvailable !== sec.seatsAvailable) {
      const diff = sec.seatsAvailable - prev.seatsAvailable;
      const dir = diff > 0 ? "increased" : "decreased";
      notify(
        "Seat change detected",
        `${sec.courseCode} - ${sec.section}: seats ${dir} to ${sec.seatsAvailable}.`
      );
    }
  });

  syncWatchlistWithSections();
}

export function toggleWatchItem(crn) {
  const idx = state.watchlist.findIndex(w => w.crn === crn);
  if (idx >= 0) {
    state.watchlist.splice(idx, 1);
  } else {
    const sec = state.sections.find(s => s.crn === crn);
    if (sec) state.watchlist.push({ ...sec, status: getStatus(sec) });
  }
}

function syncWatchlistWithSections() {
  state.watchlist = state.watchlist.map(item => {
    const sec = state.sections.find(s => s.crn === item.crn);
    if (!sec) return item;
    return { ...sec, status: getStatus(sec) };
  });
}

function getStatus(sec) {
  if (typeof sec.seatsAvailable !== "number") return "unknown";
  return sec.seatsAvailable > 0 ? "open" : "full";
}
