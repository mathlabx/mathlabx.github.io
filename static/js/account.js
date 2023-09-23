function userinfo_loader() {
    document.getElementById("u_name").innerHTML = APP.account.username;
    document.getElementById("u_email").innerHTML = APP.account.useremail;
    document.getElementById("u_info").innerHTML = APP.account.userinfo;
    document.getElementById("u_img").innerHTML = APP.account.userimg;
    document.getElementById("u_gender").innerHTML = APP.account.usergender;
    document.getElementById("u_password").innerHTML = APP.account.userpassword;
}


window.addEventListener("load", function () {
    if (!APP.login) {
        window.location = "./login.html";
    }
    userinfo_loader();
});