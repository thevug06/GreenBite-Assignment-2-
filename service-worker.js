const CACHE_NAME = 'greenbite-cache-v1';
const ASSETS_TO_CACHE = [

  './index.html',
  './recipes.html',
  './calculator.html',
  './workout.html',
  './mindfulness.html',
  './contact.html',
  './rewards.html',
  './grocery.html',
  './mood.html',
  './profile.html',

  // CSS files
  './CSS/shared.css',
  './CSS/recipes.css',
  './CSS/calculator.css',
  './CSS/workout.css',
  './CSS/mindfulness.css',
  './CSS/contact.css',
  './CSS/rewards.css',
  './CSS/grocery.css',
  './CSS/mood.css',
  './CSS/profile.css',

  // JS files
  './Javascript/shared.js',
  './Javascript/recipes.js',
  './Javascript/calculator.js',
  './Javascript/workout.js',
  './Javascript/mindfulness.js',
  './Javascript/contact.js',
  './Javascript/rewards.js',
  './Javascript/grocery.js',
  './Javascript/mood.js',
  './Javascript/profile.js',

  './manifest.json'
];



self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
