const getMsgBody = (orderID, status) => {
  switch (status) {
    case "COMPLETED":
      return `Your order (${orderID}) has been successfully completed`
    case "VOIDED":
      return `Your order (${orderID}) has been cancelled`
    case "CANCELLED":
      return `Your order (${orderID}) has been cancelled`
    default:
      return "";
  }
}

export const sendPushNotification = async (orderID, status) => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: import.meta.env.VITE_WEBPUSH_PUBLIC_KEY,
    });
    const subKey = JSON.parse(JSON.stringify(subscription))
    await fetch(`${import.meta.env.VITE_API_URL}/PushNotification`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "endpoint": subKey.endpoint,
        "p256dh": subKey.keys.p256dh,
        "auth": subKey.keys.auth,
        "payload": JSON.stringify({
          title: `QR Ordering Status`,
          body: getMsgBody(orderID, status)
        })
      }),
    });
  } else {
    console.warn("Service Worker not supported");
  }
};