self.addEventListener('install', (event) => {
  const cacheKey = 'StarnovaServiceWorkerKey';

  event.waitUntil(caches.open(cacheKey).then((cache) => {

    return cache.addAll([
      '/css/index.css',
      '/team/index.html',
    ]);
  }));
});
