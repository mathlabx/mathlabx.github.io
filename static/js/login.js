function login() {
    var userinput_email = document.getElementById("l_email").value;
    var userinput_password = document.getElementById("l_password").value;
    // 从本地存储中获取 User_Email
    var loco_email = localStorage.getItem("User_Email");
    if (loco_email) {
        serverStorage.getItem("User", loco_email, (data) => {
            console.log(data);
            localStorage.setItem("User_Name", data.Name);
            localStorage.setItem("User_Info", data.Info);
        });
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