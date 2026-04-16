import { renderDashboard } from "./ui/dashboard.js";
import { renderWatchlist } from "./ui/watchlist.js";
import { renderForecast } from "./ui/forecast.js";
import { renderAutoschedule } from "./ui/autoschedule.js";
import { renderDegreePath } from "./ui/degreePath.js";
import { renderFinance } from "./ui/finance.js";
import { renderGpa } from "./ui/gpa.js";
import { renderWorkSync } from "./ui/workSync.js";
import { renderNotifications } from "./ui/notifications.js";

const routes = {
  "": renderDashboard,
  "#watchlist": renderWatchlist,
  "#forecast": renderForecast,
  "#autoschedule": renderAutoschedule,
  "#degree": renderDegreePath,
  "#finance": renderFinance,
  "#gpa": renderGpa,
  "#work": renderWorkSync,
  "#notifications": renderNotifications
};

export function initRouter(onRouteChange) {
  const root = document.getElementById("view-root");
  const bg = document.getElementById("global-bg");

  function render() {
    const hash = window.location.hash || "";
    const view = routes[hash] || routes[""];
    root.innerHTML = "";
    setBackgroundForRoute(hash, bg);
    view(root);
    if (onRouteChange) onRouteChange(hash);
  }

  window.addEventListener("hashchange", render);
  render();
}

function setBackgroundForRoute(hash, bgEl) {
  const map = {
    "": "assets/bg-index.jpg",
    "#watchlist": "assets/bg-watchlist.jpg",
    "#forecast": "assets/bg-forecast.jpg",
    "#autoschedule": "assets/bg-autoschedule.jpg",
    "#degree": "assets/bg-degree.jpg",
    "#finance": "assets/bg-finance.jpg",
    "#gpa": "assets/bg-gpa.jpg",
    "#work": "assets/bg-work.jpg",
    "#notifications": "assets/bg-notifications.jpg"
  };
  const src = map[hash] || map[""];
  bgEl.style.backgroundImage = `url('${src}')`;
}
