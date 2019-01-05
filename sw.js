const cacheName= "v1";

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            cache.addAll(
                [
                    "./img/1.jpg",
                    "./img/2.jpg",
                    "./img/3.jpg",
                    "./img/4.jpg",
                    "./img/5.jpg",
                    "./img/6.jpg",
                    "./img/7.jpg",
                    "./img/8.jpg",
                    "./img/9.jpg",
                    "./img/10.jpg",
                    "./img/mitt.png",
                    "./img/udacity.png",
                    "./css/styles.css",
                    "./data/restaurants.json",
                    "./js/main.js",
                    "./js/dbhelper.js",
                    "./js/restaurant_info.js",
                    "./",
                    "./index.html",
                    "./manifest.json",
                    "./restaurant.html",
                    "./README.md"
                ]
            )
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
})