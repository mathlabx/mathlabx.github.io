// service-worker.js 文件内容示例

// 定义缓存名称
var CACHE_NAME = 'my-cache';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/index.html',
                '/account/index.html',
                '/class/index.html',
                '/friends/index.html',
                '/likes/index.html',
                '/search/index.html',
                '/setting/index.html',
               /* '/static/apps/css/style.css',
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
                '/static/img/app/x.png'*/
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        // 检查网络连接状态
        fetch(event.request).then(function (response) {
            // 如果网络可用，则直接从服务器获取资源
            if (navigator.onLine) {
                return response;
            }

            // 否则从缓存中获取资源
            return caches.match(event.request).then(function (cachedResponse) {
                return cachedResponse || response;
            });
        }).catch(function () {
            // 如果网络不可用并且缓存中也没有匹配的资源，则返回离线页面或其他备用内容
            return caches.match('/offline.html'); // 替换为你的离线页面或备用内容路径
        })
    );
});
