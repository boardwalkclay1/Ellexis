function scrapeSections() {
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

  window.postMessage({ type: "ELLEXIS_SECTIONS", sections }, "*");
}

setInterval(scrapeSections, 10000);
scrapeSections();

window.addEventListener("message", event => {
  if (!event.data) return;
  if (event.data.type === "ELLEXIS_EXTENSION_PING") {
    window.postMessage({ type: "ELLEXIS_EXTENSION_PONG" }, "*");
  }
});
