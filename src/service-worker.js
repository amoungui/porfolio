import { precacheAndRoute } from 'workbox-precaching';
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/path/to/bundle.js',
          // autres fichiers à mettre en cache
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
  