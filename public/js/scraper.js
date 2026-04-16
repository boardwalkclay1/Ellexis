import { updateAvailabilityFromScrape } from "./logic/availability.js";
import { state } from "./state.js";
import { updatePortalStatusBadge } from "./ui/connect.js";

let connectionTestTimeout = null;

window.addEventListener("message", event => {
  if (!event.data) return;

  if (event.data.type === "ELLEXIS_SECTIONS") {
    updateAvailabilityFromScrape(event.data.sections);
    state.portalConnection.status = "connected";
    state.portalConnection.lastTest = new Date().toLocaleString();
    state.portalConnection.lastError = null;
    updatePortalStatusBadge();
  }

  if (event.data.type === "ELLEXIS_EXTENSION_PONG") {
    state.portalConnection.status = "connected";
    state.portalConnection.lastTest = new Date().toLocaleString();
    state.portalConnection.lastError = null;
    updatePortalStatusBadge();
    if (connectionTestTimeout) {
      clearTimeout(connectionTestTimeout);
      connectionTestTimeout = null;
    }
  }
});

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

export function requestConnectionTest() {
  state.portalConnection.status = "connecting";
  state.portalConnection.lastError = null;
  updatePortalStatusBadge();

  window.postMessage({ type: "ELLEXIS_EXTENSION_PING" }, "*");

  connectionTestTimeout = setTimeout(() => {
    if (state.portalConnection.status === "connecting") {
      state.portalConnection.status = "error";
      state.portalConnection.lastError =
        "No response from extension. Make sure it is installed and your portal is open.";
      updatePortalStatusBadge();
    }
  }, 5000);
}
