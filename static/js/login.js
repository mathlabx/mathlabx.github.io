function login() {
    var userinput_email = document.getElementById("l_email").value;
    var userinput_password = document.getElementById("l_password").value;
    let server_user = new Object();
    serverStorage.getItem("User", userinput_email).then((data) => {
        server_user = data;
        if (server_user.Password == userinput_password) {
            alert("loi");
            localStorage.setItem("login", "true");
            localStorage.setItem("key", server_user.Key)
            localStorage.setItem("User_Email", server_user.Email)
            APP.get_from_server();
            window.location = "../";
        }
    });
}

function registered() {
    var userinput_email = document.getElementById("r_email").value;
    var userinput_name = document.getElementById("r_username").value;
    var userinput_password = document.getElementById("r_password").value;
    // 使用示例
    const userData = {
        Name: userinput_name,
        Email: userinput_email,
        Password: userinput_password,
        Key: Date.parse(new Date())
    };

    serverStorage.setItem("User", userinput_email, userData);
}