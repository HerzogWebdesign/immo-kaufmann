/* Offline-Speicher: alle Dateien der App werden beim ersten Öffnen auf dem Gerät abgelegt. */
var VERSION = 'immo-kaufmann-v21';
var FILES = [
  './', 'index.html', 'styles.css', 'app.js', 'pdf.js', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'apple-touch-icon.png',
  'lf1.js', 'lf2.js', 'lf3.js', 'lf4.js', 'lf5.js',
  'en.js', 'de.js', 'sk.js', 'rp.js', 'glossar.js',
  'fragen-lf1.js', 'fragen-lf2.js', 'fragen-lf3.js', 'fragen-lf4.js', 'fragen-lf5.js', 'fragen-faecher.js'
];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return Promise.all(FILES.map(function (f) { return c.add(new Request(f, { cache: 'reload' })).catch(function () {}); })); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  // Erst das Netz (damit Updates ankommen), ohne Netz der Speicher auf dem Gerät.
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request.url, { cache: 'no-cache' }).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(e.request, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('index.html'); });
  }));
});
