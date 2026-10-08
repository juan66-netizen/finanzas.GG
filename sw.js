// Guarda la app en caché para que funcione sin internet.
// Sube VERSION cada vez que cambies index.html para que el iPhone tome la nueva versión.
const VERSION = 'finanzas-v12';
// Si cambias el ícono, ponle un nombre de archivo nuevo: Safari guarda en caché el anterior.
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/negro-180.png', './icons/negro-192.png', './icons/negro-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Red primero (para recibir actualizaciones), caché si no hay conexión.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    // no-cache: siempre pregunta al servidor si hay versión nueva (si hay internet)
    fetch(e.request, { cache: 'no-cache' })
      .then(res => {
        if (res.ok && new URL(e.request.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
