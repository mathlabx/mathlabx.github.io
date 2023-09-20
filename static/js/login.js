function login() {
    alert("尝试登录");
    var userinput_email = document.getElementById("l_email").value;
    alert("尝试登录1");
    var userinput_password = document.getElementById("l_password").value;
    alert("尝试登录2");
    let server_user = new Object();
    alert("尝试登录3");
    serverStorage.getItem("User", userinput_email).then((data) => {
        alert("尝试登录4");
        server_user = data;
        alert(server_user.Password +"=="+ userinput_password);
        if (server_user.Password == userinput_password) {
            alert("密码正确");
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