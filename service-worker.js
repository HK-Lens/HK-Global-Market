/* HK Global Market & Services - Service Worker */

const APP_VERSION = "hk-global-v1.0.0";
const STATIC_CACHE = `${APP_VERSION}-static`;
const RUNTIME_CACHE = `${APP_VERSION}-runtime`;
const IMAGE_CACHE = `${APP_VERSION}-images`;

const OFFLINE_URL = "./offline.html";
const FALLBACK_404_URL = "./404.html";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./search.html",
  "./sell.html",
  "./account.html",
  "./favorites.html",
  "./messages.html",
  "./dashboard.html",
  "./terms.html",
  "./login.html",
  "./register.html",
  "./offline.html",
  "./404.html",
  "./manifest.json",
  "./assets/css/style.css",
  "./assets/js/countries.js",
  "./pwa-register.js",

  "./assets/icons/icon-72.png",
  "./assets/icons/icon-96.png",
  "./assets/icons/icon-128.png",
  "./assets/icons/icon-144.png",
  "./assets/icons/icon-152.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-384.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-maskable-192.png",
  "./assets/icons/icon-maskable-512.png"
];

function isGetRequest(request) {
  return request && request.method === "GET";
}

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isNavigationRequest(request) {
  return request.mode === "navigate" ||
    (request.headers.get("accept") || "").includes("text/html");
}

function isImageRequest(request) {
  return (request.destination || "") === "image";
}

function isAssetRequest(request) {
  const destination = request.destination || "";

  return [
    "style",
    "script",
    "font",
    "manifest",
    "worker"
  ].includes(destination);
}

async function safeCacheAdd(cacheName, urls) {
  const cache = await caches.open(cacheName);

  await Promise.all(
    urls.map(async (url) => {
      try {
        const request = new Request(url, {
          cache: "reload"
        });

        const response = await fetch(request);

        if (response && (response.ok || response.type === "opaque")) {
          await cache.put(request, response.clone());
        }
      } catch (error) {
        console.warn("[Service Worker] Could not cache:", url, error);
      }
    })
  );
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request, {
    ignoreSearch: true
  });

  if (cached) return cached;

  try {
    const response = await fetch(request);

    if (response && (response.ok || response.type === "opaque")) {
      const cache = await caches.open(cacheName);
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    if (isImageRequest(request)) {
      return new Response("", {
        status: 204,
        statusText: "No image offline"
      });
    }

    throw error;
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);

    if (response && response.ok) {
      const cache = await caches.open(cacheName);
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cached = await caches.match(request, {
      ignoreSearch: true
    });

    if (cached) return cached;

    const offlinePage = await caches.match(OFFLINE_URL, {
      ignoreSearch: true
    });

    return offlinePage || new Response("Offline", {
      status: 503,
      statusText: "Offline",
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);

  const cached = await cache.match(request, {
    ignoreSearch: true
  });

  const networkPromise = fetch(request)
    .then((response) => {
      if (response && (response.ok || response.type === "opaque")) {
        cache.put(request, response.clone());
      }

      return response;
    })
    .catch(() => null);

  return cached || networkPromise || new Response("", {
    status: 503,
    statusText: "Offline"
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    safeCacheAdd(STATIC_CACHE, CORE_ASSETS)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            const keep =
              cacheName === STATIC_CACHE ||
              cacheName === RUNTIME_CACHE ||
              cacheName === IMAGE_CACHE;

            if (!keep) {
              return caches.delete(cacheName);
            }

            return null;
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (!isGetRequest(request)) return;

  const url = new URL(request.url);

  if (isNavigationRequest(request)) {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }

  if (isSameOrigin(url) && isAssetRequest(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  if (isSameOrigin(url) && isImageRequest(request)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  if (!isSameOrigin(url)) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
});

self.addEventListener("message", (event) => {
  if (!event.data) return;

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data.type === "CLEAR_CACHE") {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});
