import { requestNotificationPermission } from "../logic/notificationsLogic.js";

export function renderNotifications(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>Notifications</h2>
      <p>Enable alerts for seat changes, holds, payments, and conflicts.</p>

      <button id="enable-notifs">Enable Notifications</button>
    </section>
  `;

  root.querySelector("#enable-notifs").addEventListener("click", () => {
    requestNotificationPermission();
  });
}
