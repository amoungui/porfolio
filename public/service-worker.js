/* global importScripts, workbox */
/* eslint no-restricted-globals: ["error", "self"] */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Vérifiez si self.__WB_MANIFEST est défini et s'il s'agit d'un tableau
// eslint-disable-next-line no-restricted-globals
const manifest = Array.isArray(self.__WB_MANIFEST) ? self.__WB_MANIFEST : [];

// Utilisez le manifeste dans precacheAndRoute
workbox.precaching.precacheAndRoute(manifest);
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      return cache.addAll([
        '/path/to/bundle.js',
        '/path/to/style.min.css',
        '/assets/img/Capture d\'écran 2024-05-15 071954.webp',
        '/assets/img/serge_white_bg.webp',
        '/assets/img/work1.webp',
        '/assets/img/work2.webp',
        '/assets/img/work3.webp',
        '/assets/img/work4.webp',
        '/assets/img/work5.webp',
        '/assets/img/work6.webp',
      ]);
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Retourne la réponse du cache ou fait une requête réseau si la ressource n'est pas en cache
        return response || fetch(event.request);
      })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  const { request } = event;
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request).then((networkResponse) => {
        return caches.open('dynamic-v1').then((cache) => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

