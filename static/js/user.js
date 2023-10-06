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

function find_like(url) {
    let back = null;
    let Local_like = JSON.parse(localStorage.getItem("Like"));
    for (let i = 0; i < Local_like.length; i++) {
        if (Local_like[i] == url) {
            back = i;
        }
    }
    return back;
}

function login_b() {
    if (APP.login) window.location = "https://app.mathscichem.com/account/";
    else window.location = "https://app.mathscichem.com/account/login.html";
}