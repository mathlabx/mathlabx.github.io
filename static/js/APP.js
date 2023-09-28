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

if (localStorage.getItem("login") == "true") APP.login = true;

if (APP.login) {
    APP.account.$s = APP.account.$l;
    //暂时不适应key
}

window.addEventListener("load", function () {
    user_page_update();

    // 注册Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('https://app.mathscichem.com/service-worker.js').then(function (registration) {
            // 注册成功
            console.log('Service Worker 注册成功:', registration);
        }).catch(function (error) {
            // 注册失败
            console.log('Service Worker 注册失败:', error);
        });
    }
});