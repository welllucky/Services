const url = process.env.NEXT_PUBLIC_BASE_URL;

// eslint-disable-next-line no-restricted-globals
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/favicon-16x16.png",
      badge: "/favicon-32x32.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
    };
    // eslint-disable-next-line no-restricted-globals
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("notificationclick", (event) => {
  // eslint-disable-next-line no-console
  console.log("Notification click received.");
  event.notification.close();
  // eslint-disable-next-line no-undef
  event.waitUntil(clients.openWindow(url));
});
