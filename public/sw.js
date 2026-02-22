// Service Worker for Advanced Caching Strategy
const CACHE_VERSION = 'v1';
const CACHE_NAME = `procedure-${CACHE_VERSION}`;

// Assets to cache immediately
const PRECACHE_URLS = [
  '/',
  '/icon.svg',
  '/favicon.ico',
];

// Cache-first strategy for these patterns
const CACHE_FIRST_PATTERNS = [
  /\.(woff2|woff|ttf|otf)$/, // Fonts
  /\.(jpg|jpeg|png|webp|avif|gif|svg)$/, // Images
  /\.(js|css)$/, // JavaScript and CSS bundles
  /\/_next\/static\//, // Next.js static files
  /\/_next\/chunks\//, // Next.js code-split chunks
  /\/logos\//, // Logo assets
];

// Network-first strategy for these patterns
const NETWORK_FIRST_PATTERNS = [
  /\/api\//,
  /\.json$/,
  /\.txt$/, // Next.js RSC payloads
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  // Cache-first strategy for static assets
  if (CACHE_FIRST_PATTERNS.some((pattern) => pattern.test(url.pathname))) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;

        return fetch(request).then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Network-first strategy for dynamic content
  if (NETWORK_FIRST_PATTERNS.some((pattern) => pattern.test(url.pathname))) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Network-first for navigation requests (HTML pages)
  // Prevents stale HTML from causing hydration mismatches during client-side nav
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Stale-while-revalidate for everything else
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request).then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
