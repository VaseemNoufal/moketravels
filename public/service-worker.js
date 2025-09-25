const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']


//install SW

self.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) =>{
                console.log('opened cache')
                return cache.addAll(urlsToCache)
            })
    )
})

//Listen for requests

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
            .then(() =>{
                return fetch(event.request)
            })
            .catch(() =>caches.match('offline.html'))
    )
})


//active the file

self.addEventListener('activate', (event) =>{
    const casheWhiteList = [];
    casheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames)=> Promise.all(
            cacheNames.map((cacheName) =>{
                if(!casheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})