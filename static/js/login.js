function login() {
    var userinput_username = (document.getElementById("l_username").value).toLowerCase();
    var userinput_password = document.getElementById("l_password").value;
    let server_user = new Object();
    serverStorage.getItem("User", userinput_username).then((data) => {
        server_user = data;
        if (server_user && (server_user.Password === null || typeof server_user.Password === 'undefined')) {
            alert("Wrong Username...");
        } else if (server_user && server_user.Password == userinput_password) {
            localStorage.setItem("login", "true");
            localStorage.setItem("key", server_user.Key);
            localStorage.setItem("User_Name", server_user.Name);
            localStorage.setItem("User_Info", server_user.Info);
            localStorage.setItem("User_Email", server_user.Email);
            localStorage.setItem("User_Img", server_user.Img);
            localStorage.setItem("User_Gender", server_user.Gender);
            localStorage.setItem("User_Password", server_user.Password);
            APP.get_from_server();
            setTimeout(() => {
                window.location = "../";
            }, 1000);
        } else {
            alert("Wrong Password...");
        }
    });
}

function registered() {
    var userinput_email = document.getElementById("r_email").value;
    var userinput_name = document.getElementById("r_username").value;
    var userinput_password = document.getElementById("r_password").value;
    var userinput_info = document.getElementById("r_info").value;
    var userinput_gender = document.getElementById("r_gender").value;
    var userinput_img = document.getElementById("r_img").value;

    // 验证用户名长度
    if (userinput_name.length < 6) {
        markInvalidInput("r_username", "用户名必须至少包含 6 个字符");
        return;
    }

    // 验证密码复杂性
    if (!isValidPassword(userinput_password)) {
        markInvalidInput("r_password", "密码必须包含字母、大小写字母、数字和至少一个特殊字符，且至少 10 个字符");
        return;
    }

    if (!userinput_info) {
        markInvalidInput("r_info", "个人信息不能为空");
        return;
    }

    if (!userinput_gender) {
        markInvalidInput("r_gender", "请选择性别");
        return;
    }

    // 如果所有输入都有效，继续执行注册逻辑
    const userData = {
        Name: userinput_name,
        Email: userinput_email,
        Password: userinput_password,
        Info: userinput_info,
        Gender: userinput_gender,
        Img: userinput_img,
        Key: Date.parse(new Date())
    };

    serverStorage.getItem("User", userinput_name.toLowerCase()).then((data) => {
        if (data) {
            alert("This username has already been registered, please use another username.");
        } else {
            serverStorage.setItem("User", (userinput_name).toLowerCase(), userData);
            setTimeout(() => {
                document.getElementById("l_username").value = userinput_name;
                document.getElementById("l_password").value = userinput_password;
                login();
            }, 1500);
        }
    });
}

// 验证密码复杂性的函数
function isValidPassword(password) {
    // 密码必须包含字母、大小写字母、数字和至少一个特殊字符，且至少 10 个字符
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{10,}$/;
    return passwordPattern.test(password);
}

// 标记输入框为无效，并显示错误消息
function markInvalidInput(inputId, errorMessage) {
    var inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = "red";
    inputElement.setCustomValidity(errorMessage);
    inputElement.reportValidity();
}

window.addEventListener("load", function () {
    if (APP.login) {
        window.location = "../";
    }
})