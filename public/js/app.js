import { initRouter } from "./router.js";
import { renderTopNav, setActiveNav } from "./ui/nav.js";
import { initState } from "./state.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

document.addEventListener("DOMContentLoaded", () => {
  initState();
  renderTopNav();
  initRouter(setActiveNav);
});
