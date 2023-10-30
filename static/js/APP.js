let APP = new Object();
APP.apps = new Object();
APP.liked = new Object();
APP.account = new Object();
APP.login = false;
APP.domainURL = "https://app.mathscichem.com";
APP.get_from_server = function () {
    if (APP.account.UID) {
        serverStorage.getItem("User", APP.account.UID).then((data) => {
            console.log(data);
            if (data) {
                localStorage.setItem("User_Name", data.Name);
                localStorage.setItem("User_Info", data.Info);
                localStorage.setItem("User_Img", data.Img);
                localStorage.setItem("User_Gender", data.Gender);
                APP.class = data.Class;
            } else {
                localStorage.clear();
                location.reload();
            }
        });
    }
}

APP.account = {
    UID: localStorage.getItem("UID"),
    username: localStorage.getItem("User_Name"),
    useremail: localStorage.getItem("User_Email"),
    userinfo: localStorage.getItem("User_Info"),
    userimg: localStorage.getItem("User_Img"),
    usergender: localStorage.getItem("User_Gender"),
    userpassword: localStorage.getItem("User_Password"),
    $l: localStorage.getItem("key"),
    $s: "not login"
}

APP.class = [];

APP.log = function (message = "Loading...", duration = 3000) {
    // 使用固定的id标识加载提示容器
    const containerId = "loading-container";

    //打印到控制台
    console.log("Log: " + message);

    // 查找已存在的容器并删除
    const existingContainer = document.getElementById(containerId);
    if (existingContainer) {
        document.body.removeChild(existingContainer);
    }

    // 创建一个居中的文字元素的容器
    const container = document.createElement("div");
    container.id = containerId; // 设置id
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

    // 定时隐藏加载提示
    setTimeout(() => {
        hide();
    }, duration);

    function hide() {
        // 查找已存在的容器并删除
        const existingContainer = document.getElementById(containerId);
        if (existingContainer) {
            document.body.removeChild(existingContainer);
        }
    }

    return { hide };
}

APP.Ads = {
    /*
    none
    low
    few
    medium
    more
    high
    */
    amount: "none"
}


if (localStorage.getItem("login") == "true") APP.login = true;

if (APP.login) {
    APP.account.$s = APP.account.$l;
    //暂时不适应key
}

window.addEventListener("load", function () {
    user_page_update();
    checkCurrentUser();
    /*
    SW
    
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

/*流元素动画*/
window.addEventListener('load', function () {
    setTimeout(() => {
        const elements = document.querySelectorAll('.flow-element, .adsbygoogle');
        let throttled = false;

        elements.forEach(element => {
            element.addEventListener('mousemove', throttle(handleMouseMove, 16));
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        function handleMouseMove(e) {
            if (!throttled) {
                requestAnimationFrame(() => {
                    const rect = this.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const mouseX = e.clientX - centerX;
                    const mouseY = centerY - e.clientY;
                    const percentX = mouseX / (rect.width / 6);
                    const percentY = mouseY / (rect.height / 6);

                    const rY = percentX * 2;
                    const rX = percentY * 2;

                    this.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;

                    throttled = true;
                    setTimeout(() => {
                        throttled = false;
                    }, 16);
                });
            }
        }

        function handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
        }

        function handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(() => {
                this.style.transform = 'none';
            }, 1000);
        }

        function throttle(func, delay) {
            return function () {
                if (!throttled) {
                    func.apply(this, arguments);
                }
            };
        }
    }, 200);
});