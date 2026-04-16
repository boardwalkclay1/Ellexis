/**
 * Request permission and set up basic notification capability.
 */
export async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("Notifications are not supported on this device.");
    return;
  }
  const perm = await Notification.requestPermission();
  if (perm === "granted") {
    new Notification("Ellexis notifications enabled.");
  }
}

/**
 * Fire a notification for seat changes, holds, etc.
 * (Call this from availability / finance / etc. when state changes.)
 */
export function notify(title, body) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  new Notification(title, { body });
}
