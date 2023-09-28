var cacheStorageKey = 'my-cache';

var cacheList = [
    '/',
    '/index.html',
    '/account/',
    '/account/index.html',
    '/class/',
    '/class/index.html',
    '/friends/',
    '/friends/index.html',
    '/likes/',
    '/likes/index.html',
    '/search/',
    '/search/index.html',
    '/setting/',
    '/setting/index.html',
    '/static/apps/css/style.css',
    '/static/apps/js/main.js',
    '/static/css/account.css',
    '/static/css/desktop.css',
    '/static/css/loading_motion.css',
    '/static/css/mobile.css',
    '/static/css/styles.css',
    '/static/css/tablet.css',
    '/static/js/account.js',
    '/static/js/APP.js',
    '/static/js/likes.js',
    '/static/js/loading_motion.js',
    '/static/js/login.js',
    '/static/js/operate_DOM.js',
    '/static/js/server.js',
    '/static/js/user.js',
    '/static/img/logo_s.png',
    '/static/img/logo.png',
    '/static/img/app/Quadratic_Equation_Calculator.jpg',
    '/static/img/app/Three_Variable_Linear_Equation_Calculator.jpg',
    '/static/img/app/Two_Variable_Linear_Equation_Calculator.jpg',
    '/static/img/app/x.png',
    '/app/x/',
    '/app/x/index.html',
    '/app/Quadratic_Equation_Calculator/',
    '/app/Quadratic_Equation_Calculator/index.html',
    '/app/Quadratic_Equation_Calculator/script.js',
    '/app/Two_Variable_Linear_Equation_Calculator/',
    '/app/Two_Variable_Linear_Equation_Calculator/index.html',
    '/app/Two_Variable_Linear_Equation_Calculator/script.js',
    '/app/Three_Variable_Linear_Equation_Calculator/',
    '/app/Three_Variable_Linear_Equation_Calculator/index.html',
    '/app/Three_Variable_Linear_Equation_Calculator/script.js'
];

self.addEventListener('install', function (e) {
    console.log('sw-install');
    e.waitUntil(
        caches.open(cacheStorageKey).then(function (cache) {
            return cache.addAll(cacheList);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function (e) {
    console.log('sw-activate');
    var cacheDeletePromises = caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (name) {
            if (name !== cacheStorageKey) {
                console.log('Deleting cache:', name);
                return caches.delete(name);
            } else {
                return Promise.resolve();
            }
        }));
    });
    e.waitUntil(
        Promise.all([cacheDeletePromises]).then(function () {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        // 在此处检查网络连接状态
        fetch(e.request).then(function (response) {
            // 如果网络可用，则直接从网络获取资源
            if (navigator.onLine) {
                console.log(`fetch: ${e.request.url} from http`);
                return response;
            }

            // 否则尝试从缓存中获取资源
            return caches.match(e.request).then(function (cachedResponse) {
                if (cachedResponse) {
                    console.log(`fetch: ${e.request.url} from cache`);
                    return cachedResponse;
                } else {
                    console.log(`fetch: ${e.request.url} not found in cache`);
                    return fetch(e.request);
                }
            });
        }).catch(function () {
            // 如果网络不可用并且缓存中也没有匹配的资源，则返回离线页面或其他备用内容
            return caches.match('/offline.html'); // 替换为你的离线页面或备用内容路径
        })
    );
});