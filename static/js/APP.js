let APP = new Object();
APP.apps = new Object();
APP.liked = new Object();
APP.account = new Object();
APP.login = false;
APP.get_from_server = function () {
    var loco_name = localStorage.getItem("User_Name");
    if (loco_name) {
        serverStorage.getItem("User", loco_name.toLowerCase()).then((data) => {
            console.log(data);
            if (data) {
                localStorage.setItem("User_Name", data.Name);
                localStorage.setItem("User_Email", data.Email);
                localStorage.setItem("User_Info", data.Info);
                localStorage.setItem("User_Img", data.Img);
                localStorage.setItem("User_Gender", data.Gender);
                localStorage.setItem("User_Password", data.Password);
            } else {
                localStorage.clear();
                location.reload();
            }
        });
    }
}

APP.account = {
    username: localStorage.getItem("User_Name"),
    useremail: localStorage.getItem("User_Email"),
    userinfo: localStorage.getItem("User_Info"),
    userimg: localStorage.getItem("User_Img"),
    usergender: localStorage.getItem("User_Gender"),
    userpassword: localStorage.getItem("User_Password"),
    $l: localStorage.getItem("key"),
    $s: "not login"
}

APP.log = function (message = "Loading...", duration = 3000) {
    let container = null;
    let timeoutId = null;

    // 创建一个居中的文字元素的容器
    container = document.createElement("div");
    container.style.position = "fixed";
    container.style.zIndex = "999999";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    container.style.color = "white";
    container.style.padding = "20px";
    container.style.borderRadius = "5px";
    container.style.zIndex = "1000";

    // 创建加载文字元素并设置文本内容
    const loadingText = document.createElement("div");
    loadingText.textContent = message;

    // 将加载文字元素添加到容器中
    container.appendChild(loadingText);

    // 将容器添加到文档中
    document.body.appendChild(container);

    // 隐藏已存在的加载提示并重新计时
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    // 定时隐藏加载提示
    timeoutId = setTimeout(() => {
        hide();
    }, duration);

    function hide() {
        if (container) {
            // 从文档中移除加载提示容器
            document.body.removeChild(container);
            container = null;
            clearTimeout(timeoutId);
        }
    }

    return { hide };
}

// 示例使用方式
//APP.log("加载中，请稍候...", 5000); // 在5秒后自动隐藏加载提示


if (localStorage.getItem("login") == "true") APP.login = true;

if (APP.login) {
    APP.account.$s = APP.account.$l;
    //暂时不适应key
}

window.addEventListener("load", function () {
    user_page_update();
    checkCurrentUser();
    /*
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('https://app.mathscichem.com/service-worker.js').then(function (registration) {
            if (registration.installing) {
                console.log('Service Worker installing');
            } else if (registration.active) {
                console.log('Service Worker active');
            }
        }).catch(function (error) {
            console.log('Service Worker registration failed:', error);
        });
    }*/
});