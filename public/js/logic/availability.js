import { state } from "../state.js";

/**
 * Update sections from scraped data (portal or extension).
 * sections: [{ crn, courseCode, section, seatsAvailable, capacity, waitlist }]
 */
export function updateAvailabilityFromScrape(sections) {
  state.sections = sections;
  syncWatchlistWithSections();
  // later: trigger notifications on changes
}

/**
 * Add/remove a CRN from the watchlist.
 */
export function toggleWatchItem(crn) {
  const idx = state.watchlist.findIndex(w => w.crn === crn);
  if (idx >= 0) {
    state.watchlist.splice(idx, 1);
  } else {
    const sec = state.sections.find(s => s.crn === crn);
    if (sec) state.watchlist.push({ ...sec, status: getStatus(sec) });
  }
  // later: persist to IndexedDB/localStorage
}

/**
 * Sync watchlist entries with latest section data.
 */
function syncWatchlistWithSections() {
  state.watchlist = state.watchlist.map(item => {
    const sec = state.sections.find(s => s.crn === item.crn);
    if (!sec) return item;
    return { ...sec, status: getStatus(sec) };
  });
}

/**
 * Determine status: open / full / unknown.
 */
function getStatus(sec) {
  if (typeof sec.seatsAvailable !== "number") return "unknown";
  return sec.seatsAvailable > 0 ? "open" : "full";
}
