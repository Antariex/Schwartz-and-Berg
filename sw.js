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
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== "recursos") {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const cache = await caches.open("recursos");

  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResponse = await fetch(request);
  cache.put(request, networkResponse.clone());

  return networkResponse;
}

// Verificar si hay una actualización disponible y actualizar el Service Worker
const registration = await navigator.serviceWorker.ready;
if ("update" in registration) {
  registration.update();
}