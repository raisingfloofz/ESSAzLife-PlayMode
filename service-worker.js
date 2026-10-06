const CACHE_NAME =
    "essazlife-playmode-v2";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./MooCow.Icon.2.png"
];


/* =========================================
   INSTALL
========================================= */

self.addEventListener(
    "install",
    function(event) {

        event.waitUntil(
            caches
                .open(CACHE_NAME)
                .then(function(cache) {

                    return cache.addAll(
                        APP_FILES
                    );
                })
        );

        self.skipWaiting();
    }
);


/* =========================================
   ACTIVATE
========================================= */

self.addEventListener(
    "activate",
    function(event) {

        event.waitUntil(

            caches
                .keys()
                .then(function(cacheNames) {

                    return Promise.all(

                        cacheNames.map(
                            function(cacheName) {

                                if (
                                    cacheName !==
                                    CACHE_NAME
                                ) {

                                    return caches.delete(
                                        cacheName
                                    );
                                }
                            }
                        )
                    );
                })
        );

        self.clients.claim();
    }
);


/* =========================================
   FETCH
========================================= */

self.addEventListener(
    "fetch",
    function(event) {

        if (
            event.request.method !==
            "GET"
        ) {
            return;
        }

        event.respondWith(

            caches
                .match(event.request)
                .then(
                    function(cachedResponse) {

                        return (
                            cachedResponse ||
                            fetch(event.request)
                        );
                    }
                )
        );
    }
);