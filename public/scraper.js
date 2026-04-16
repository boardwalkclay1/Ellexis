import { updateAvailabilityFromScrape } from "./logic/availability.js";

/**
 * Listen for messages from the browser extension.
 */
window.addEventListener("message", event => {
  if (!event.data) return;

  if (event.data.type === "ELLEXIS_SECTIONS") {
    updateAvailabilityFromScrape(event.data.sections);
  }
});

/**
 * OPTIONAL: In-app scraper for embedded portal pages.
 * Call this when the user opens their portal inside Ellexis.
 */
export function scrapePortalDOM() {
  const rows = [...document.querySelectorAll(".section-row")];

  const sections = rows.map(r => ({
    crn: r.querySelector(".crn")?.innerText.trim(),
    courseCode: r.querySelector(".course")?.innerText.trim(),
    section: r.querySelector(".section")?.innerText.trim(),
    seatsAvailable: parseInt(r.querySelector(".seats")?.innerText, 10),
    capacity: parseInt(r.querySelector(".capacity")?.innerText, 10),
    waitlist: parseInt(r.querySelector(".wait")?.innerText, 10),
    days: (r.dataset.days || "").split(","),
    startTime: r.dataset.start,
    endTime: r.dataset.end
  }));

  updateAvailabilityFromScrape(sections);
}
