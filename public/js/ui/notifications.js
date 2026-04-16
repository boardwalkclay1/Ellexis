export function renderNotifications(root) {
  root.innerHTML = `
    <section class="panel">
      <h2>Notifications</h2>
      <p>Enable alerts for seat changes, holds, payments, and class conflicts.</p>
      <button id="enable-notifs">Enable Notifications</button>
    </section>
  `;

  const btn = root.querySelector("#enable-notifs");
  btn.addEventListener("click", async () => {
    if (!("Notification" in window)) {
      alert("Notifications are not supported on this device.");
      return;
    }
    const perm = await Notification.requestPermission();
    if (perm === "granted") {
      new Notification("Ellexis notifications enabled.");
    }
  });
}
