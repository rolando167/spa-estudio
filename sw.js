self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("v1").then(cache => {
            return cache.addAll([
                "index.html",
                "estudios.js",
                "style.css",
                "icon-192.png",
                "icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(resp => resp || fetch(e.request))
    );
});
