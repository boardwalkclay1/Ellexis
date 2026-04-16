chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "SEAT_ALERT") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/48.png",
      title: "Ellexis Seat Alert",
      message: msg.text
    });
  }
});
