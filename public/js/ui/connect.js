import { state } from "../state.js";
import { requestConnectionTest } from "../scraper.js";

export function renderConnectPortal(root) {
  const conn = state.portalConnection;

  root.innerHTML = `
    <section class="panel connect-portal">
      <h2>Connect Your College Portal</h2>
      <p>To sync your real schedule, seat counts, GPA, and financial aid, use the Ellexis Browser Extension.</p>

      <h3>Onboarding</h3>
      <ol>
        <li>Install the Ellexis Extension from your browser’s extension store.</li>
        <li>Open your college portal in Chrome.</li>
        <li>Log in normally with your school credentials.</li>
        <li>Leave the portal tab open; Ellexis will sync in the background.</li>
      </ol>

      <div class="connect-actions">
        <button id="btn-install-ext" class="btn-primary">How to install the extension</button>
        <button id="btn-test-connection" class="btn-secondary">Test connection</button>
      </div>

      <div class="connect-status">
        <p><strong>Status:</strong> <span id="connect-status-text">${formatStatus(conn.status)}</span></p>
        <p><strong>Last test:</strong> ${conn.lastTest || "Never"}</p>
        ${
          conn.lastError
            ? `<p class="error"><strong>Last error:</strong> ${conn.lastError}</p>`
            : ""
        }
      </div>
    </section>
  `;

  root.querySelector("#btn-install-ext").addEventListener("click", () => {
    alert("Install the Ellexis Extension from your browser’s extension store, then open your college portal.");
  });

  root.querySelector("#btn-test-connection").addEventListener("click", () => {
    requestConnectionTest();
  });

  updatePortalStatusBadge();
}

function formatStatus(status) {
  if (status === "connected") return "Connected";
  if (status === "connecting") return "Testing…";
  if (status === "error") return "Error";
  return "Not connected";
}

export function updatePortalStatusBadge() {
  const badge = document.getElementById("portal-status");
  if (!badge) return;
  const s = state.portalConnection.status;
  if (s === "connected") {
    badge.textContent = "Portal: Connected";
    badge.className = "portal-status connected";
  } else if (s === "connecting") {
    badge.textContent = "Portal: Testing…";
    badge.className = "portal-status connecting";
  } else if (s === "error") {
    badge.textContent = "Portal: Error";
    badge.className = "portal-status error";
  } else {
    badge.textContent = "Portal: Not connected";
    badge.className = "portal-status";
  }
}
