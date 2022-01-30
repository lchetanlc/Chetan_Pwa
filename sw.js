self.addEventListener('install',e=>{
    e.waitUntill(
        caches.open('static').then(cache=>{
            return cache.addAll(["./","ChetanResume.doc","index.js","lchetanlc.jpeg","logo192.png","manifest.json","sw.js"]);
        })
    );
});

self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});