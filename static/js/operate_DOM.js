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
    
    function new_ads_flow() {
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
        container.appendChild(scriptElement);
        container.appendChild(insElement);
        container.appendChild(scriptElement2);
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
        }
    }
    window_load(true, 900);
}

window.addEventListener("load", function () {
    typs_update();
    app_update(true);
});