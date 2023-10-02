function typs_update() {
    let container = document.getElementById("types");
    for (i = 0; i < APP.typs.length; i++) {
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
    function to_app(url) {
        window.location = url;
    }
    function types_have(types, find) {
        let return_f = false;
        for (i = 0; i < types.length; i++) {
            if (types[i] == find) return_f = true;
        }
        return return_f;
    }
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (i = 0; i < APP.apps.length; i++) {
        if (types_have(APP.apps[i].types, typ) || typ) {
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
}

window.addEventListener("load", function () {
    typs_update();
    app_update(true);
});