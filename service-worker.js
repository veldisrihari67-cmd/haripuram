const CACHE_NAME = "haripuram-v8";
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./data/locations.json",
  "./data/characters.json",
  "./data/family.json",
  "./data/seasons.json",
  "./data/festivals.json",
  "./data/stories.json",
  "./data/vocabulary.json",
  "./assets/images/map.webp",
  "./assets/images/pandu-house.webp",
  "./assets/images/school.webp",
  "./assets/images/library.webp",
  "./assets/images/temple.webp",
  "./assets/images/banyan-tree.webp",
  "./assets/images/cheruvu.webp",
  "./assets/images/fields.webp",
  "./assets/icons/house.svg",
  "./assets/icons/school.svg",
  "./assets/icons/library.svg",
  "./assets/icons/temple.svg",
  "./assets/icons/tree.svg",
  "./assets/icons/lake.svg",
  "./assets/icons/field.svg",
  "./assets/audio/birds.mp3",
  "./assets/audio/rain.mp3",
  "./assets/audio/temple-bell.mp3",
  "./assets/audio/summer-wind.mp3",
  "./assets/audio/frogs.mp3",
  "./assets/audio/village-evening.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type === "opaque") {
            return response;
          }
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
