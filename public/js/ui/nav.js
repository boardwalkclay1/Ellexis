const links = [
  { hash: "", label: "Dashboard" },
  { hash: "#watchlist", label: "Watchlist" },
  { hash: "#forecast", label: "Forecast" },
  { hash: "#autoschedule", label: "Auto-Schedule" },
  { hash: "#degree", label: "Degree Path" },
  { hash: "#finance", label: "Financial Aid" },
  { hash: "#gpa", label: "GPA" },
  { hash: "#work", label: "Work Sync" },
  { hash: "#notifications", label: "Notifications" }
];

export function renderTopNav() {
  const nav = document.getElementById("top-nav");
  nav.innerHTML = links
    .map(
      l =>
        `<a href="${l.hash || "#"}" data-hash="${l.hash}">${l.label}</a>`
    )
    .join("");
}

export function setActiveNav(hash) {
  const nav = document.getElementById("top-nav");
  nav.querySelectorAll("a").forEach(a => {
    const h = a.dataset.hash || "";
    a.classList.toggle("active", h === hash || (!hash && h === ""));
  });
}
