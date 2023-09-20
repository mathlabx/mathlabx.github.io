function user_page_update() {
    if (APP.login) {
        if (APP.account.$l == APP.account.$s) {
            document.getElementById("username").innerHTML = APP.account.username;
        } else {
            APP.get_from_server();
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    }
}

function login_b() {
    if (APP.login) window.location = "app.mathscichem.com/account/";
    else window.location = "app.mathscichem.com/account/login.html"
}