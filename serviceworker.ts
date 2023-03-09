const CACHE_NAME: string = "version-1";
const urlsToCache: string[] = ["index.html", "offline.html"];

const self: ServiceWorkerGlobalScope = this as ServiceWorkerGlobalScope;

// Install SW
self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache: Cache) => {
      console.log("Opening cache");

      return cache.addAll(urlsToCache);
    }),
  );
});

// Listen for requests
self.addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response: Response | undefined) => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    }),
  );
});

// Activate the SW
self.addEventListener("activate", (event: ExtendableEvent) => {
  const cacheWhiteList: string[] = [];
  cacheWhiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames: string[]) =>
      Promise.all(
        cacheNames.map((cacheName: string) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});
