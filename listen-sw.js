// Offline cache for the Audio Test Listener (listen.html).
// Bump the version when listen.html changes so the iPad picks up the new copy.
const CACHE = "listener-v1";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["listen.html"])));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k.startsWith("listener-") && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Network first (so updates arrive when online), cached copy when offline.
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (!url.pathname.endsWith("listen.html")) return;   // leave the iPad mini's files alone
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put("listen.html", copy));
      return r;
    }).catch(() => caches.match("listen.html"))
  );
});
