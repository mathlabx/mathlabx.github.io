// service-worker.js 文件内容示例

// 定义缓存名称
var CACHE_NAME = 'my-cache';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/index.html'
                // 添加其他需要缓存的资源
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
