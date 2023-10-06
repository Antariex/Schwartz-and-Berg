importScripts("sw-helper.js");

self.addEventListener("install", async (event) => {
  // Precache
  const cache = await caches.open("recursos");
  await cache.addAll([
    "/pwa",
    "styles.css",
    "/images/logo.jpg",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
    "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2",
  ]);
});

self.addEventListener("activate", (event) => {
  // Se activó el SW para la PWA de este scope
});

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const cache = await caches.open("recursos");

  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    const networkResponse = await fetch(request);
    cache.put(request, networkResponse.clone());

    return cachedResponse;
  }

  const networkResponse = await fetch(request);
  //cache.put(request, networkResponse.clone());
  return networkResponse; // Change this line from 'fetch(response)' to 'fetch(event.request)'
}

// const registration = await navigator.serviceWorker.ready;
// if ("update" in registration) {
//   registration.update();
// }