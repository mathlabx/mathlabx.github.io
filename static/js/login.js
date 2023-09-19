function login() {
    console.log("尝试登录");
    var userinput_email = document.getElementById("l_email").value;
    var userinput_password = document.getElementById("l_password").value;
    let server_user = new Object();
    serverStorage.getItem("User", userinput_email).then((data) => {
        server_user = data;
    });
    console.log(server_user.Password +"="+ userinput_password)
    if (server_user.Password == userinput_password) {
       console.log("密码正确");
        localStorage.setItem("login", "true");
        localStorage.setItem("key", server_user.Key)
        APP.get_from_server();
        window.location = "../";
    }
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