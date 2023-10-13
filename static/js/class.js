function class_update() {
    function to_class(url) {
        window.location = url;
    }
    let container = document.getElementById("container");
    for (i = 0; i < APP.apps.length; i++) {
        if (find_like(APP.apps[i].url) != null) {
            let new_flow = document.createElement("div");
            new_flow.className = "flow-element";
            if (APP.apps[i].full_line == true) new_flow.className += " full-line";
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
                to_class(this.url);
            });
            container.append(new_flow);
        }
    }
}

window.addEventListener("load", function () {
    if (!APP.login) window.location = "../account/login.html";
    class_update();
})