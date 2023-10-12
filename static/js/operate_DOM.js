function typs_update() {
    let container = document.getElementById("types");
    for (var i = 0; i < APP.typs.length; i++) {
        let new_types = document.createElement("div");
        new_types.className = "type";
        new_types.innerHTML = APP.typs[i];
        new_types.addEventListener("click", function () {
            app_update(this.innerHTML);
        });
        container.append(new_types);
    }
}


function app_update(typ) {
    window_load(false, 0);
    function to_app(url) {
        window.location = url;
    }
    function types_have(types, find) {
        let return_f = false;
        for (var i = 0; i < types.length; i++) {
            if (types[i] == find) return_f = true;
        }
        return return_f;
    }

    // 生成低概率的正态分布随机数
    function generateRandomLow() {
        var mean = 0.3; // 低概率对应的平均值
        var stdDeviation = 0.1; // 标准差，可以根据需要调整

        var u1 = Math.random();
        var u2 = Math.random();
        var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

        return mean + stdDeviation * z;
    }

    // 生成中概率的正态分布随机数
    function generateRandomMedium() {
        var mean = 0.5; // 中概率对应的平均值
        var stdDeviation = 0.15; // 标准差，可以根据需要调整

        var u1 = Math.random();
        var u2 = Math.random();
        var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

        return mean + stdDeviation * z;
    }

    // 生成高概率的正态分布随机数
    function generateRandomHigh() {
        var mean = 0.7; // 高概率对应的平均值
        var stdDeviation = 0.2; // 标准差，可以根据需要调整

        var u1 = Math.random();
        var u2 = Math.random();
        var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

        return mean + stdDeviation * z;
    }

    // 根据APP.Ads.amount来确定概率
    function shouldShowAd() {
        var probability = 0;
        switch (APP.Ads.amount) {
            case "none":
                probability = 0; // 不显示广告
                break;
            case "few":
                probability = generateRandomLow(); // 使用正态分布生成随机数
                break;
            case "medium":
                probability = generateRandomMedium(); // 使用正态分布生成随机数
                break;
            case "more":
                probability = generateRandomHigh(); // 使用正态分布生成随机数
                break;
        }

        // 限制概率在0到1之间
        probability = Math.min(1, Math.max(0, probability));

        // 生成随机数，如果小于概率则返回true，否则返回false
        var randomValue = Math.random();
        return randomValue < probability;
    }

    function new_ads_flow() {
        // 创建一个自定义容器元素
        var customAdContainer = document.createElement("div");

        // 设置容器的样式，以控制广告的布局
        customAdContainer.className = "adsbygoogle";

        // 创建一个新的script元素
        var scriptElement = document.createElement("script");
        scriptElement.async = true;
        scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3037105534785562";
        scriptElement.crossOrigin = "anonymous";

        // 创建ins元素
        var insElement = document.createElement("ins");
        insElement.className = "adsbygoogle";
        insElement.style.display = "block";
        insElement.setAttribute("data-ad-format", "fluid");
        insElement.setAttribute("data-ad-layout-key", "-dq-a+49-4i-5u");
        insElement.setAttribute("data-ad-client", "ca-pub-3037105534785562");
        insElement.setAttribute("data-ad-slot", "3489283943");

        // 创建最后一个script元素
        var scriptElement2 = document.createElement("script");
        scriptElement2.textContent = "(adsbygoogle = window.adsbygoogle || []).push({});";

        // 将这些元素添加到容器中
        customAdContainer.appendChild(scriptElement);
        customAdContainer.appendChild(insElement);
        customAdContainer.appendChild(scriptElement2);

        // 将自定义容器添加到页面的某个元素
        var container = document.getElementById('container');
        container.appendChild(customAdContainer);
    }

    let container = document.getElementById("container");
    container.innerHTML = "";
    for (var i = 0; i < APP.apps.length; i++) {
        if (types_have(APP.apps[i].types, typ) || typ == true) {
            let new_flow = document.createElement("div");
            new_flow.className = "flow-element";
            if (APP.apps[i].full_line == true) new_flow.className += " full-line";
            let new_img = document.createElement("img");
            new_img.src = APP.apps[i].img;
            new_flow.append(new_img);
            let new_title = document.createElement("h2");
            new_title.innerHTML = APP.apps[i].title;
            if (APP.apps[i].hot == true) {
                let new_hot = document.createElement("sup");
                new_hot.className = "hot-tag";
                new_hot.innerHTML = `&nbsp;HOT`;
                new_title.append(new_hot);
            }
            new_flow.append(new_title);
            let new_p = document.createElement("p");
            new_p.innerText = APP.apps[i].description;
            new_flow.append(new_p);
            new_flow.url = APP.apps[i].url;
            new_flow.addEventListener("click", function () {
                to_app(this.url);
            });
            container.append(new_flow);
            if (shouldShowAd()) new_ads_flow(); //添加流广告
        }
    }
    window_load(true, 900);
}

window.addEventListener("load", function () {
    typs_update();
    app_update(true);
});