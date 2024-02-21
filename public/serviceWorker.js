self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {}; // Check if event.data is not null
  self.registration.showNotification(data.title || "Default Title", {
    body: data.body || "Default Body",
  });
});
