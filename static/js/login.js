// 用户登录函数
function login() {
    var userinput_username = (document.getElementById("l_username").value).toLowerCase();
    var userinput_password = document.getElementById("l_password").value;

    // 使用 Firebase 用户认证登录
    firebase.auth().signInWithEmailAndPassword(userinput_username, userinput_password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("用户登录成功:", user);

            // 在这里可以添加代码，处理用户登录成功后的操作
            // 例如：在本地存储中保存用户认证状态
            localStorage.setItem("login", "true");

            // 获取其他用户信息并保存在本地存储中
            serverStorage.getItem("User", userinput_username).then((data) => {
                if (data) {
                    localStorage.setItem("key", data.Key);
                    localStorage.setItem("User_Name", data.Name);
                    localStorage.setItem("User_Info", data.Info);
                    localStorage.setItem("User_Email", data.Email);
                    localStorage.setItem("User_Img", data.Img);
                    localStorage.setItem("User_Gender", data.Gender);
                    // 本地存储其他用户信息
                }
            });

            // 重定向到其他页面
            setTimeout(() => {
                window.location = "../";
            }, 1000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("用户登录失败:", errorMessage);

            // 在这里可以处理登录失败的情况，例如显示错误消息给用户
            alert("登录失败：" + errorMessage);
        });
}

// 用户注册函数
function registered() {
    var userinput_email = document.getElementById("r_email").value;
    var userinput_name = document.getElementById("r_username").value;
    var userinput_password = document.getElementById("r_password").value;
    var userinput_info = document.getElementById("r_info").value;
    var userinput_gender = document.getElementById("r_gender").value;
    var userinput_img = document.getElementById("r_img").value;

    // 使用 Firebase 用户认证注册
    firebase.auth().createUserWithEmailAndPassword(userinput_email, userinput_password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("用户注册成功:", user);

            // 在这里可以添加代码，处理用户注册成功后的操作
            // 例如：在本地存储中保存用户认证状态

            // 获取其他用户信息并保存在实时数据库中
            const userData = {
                Name: userinput_name,
                Info: userinput_info,
                Gender: userinput_gender,
                Img: userinput_img,
            };

            // 使用 Firebase 实时数据库存储用户信息
            serverStorage.setItem("User", userinput_username.toLowerCase(), userData);

            // 注册成功后跳转或执行其他操作
            setTimeout(() => {
                document.getElementById("l_username").value = userinput_name;
                document.getElementById("l_password").value = userinput_password;
                login();
            }, 1500);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("用户注册失败:", errorMessage);

            // 在这里可以处理注册失败的情况，例如显示错误消息给用户
            alert("注册失败：" + errorMessage);
        });
}

// Function to validate image URL format and add "https://" if missing
function isValidImageUrl(imageUrl) {
    var imageUrlPattern = /^(https?:\/\/)?\S+\.(jpg|jpeg|png|gif|bmp)$/;
    return imageUrlPattern.test(imageUrl);
}

function addHttpsToImageUrl(imageUrl) {
    if (!/^https?:\/\//i.test(imageUrl)) {
        imageUrl = 'https://' + imageUrl;
    }
    return imageUrl;
}

// Function to validate email format
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate username, allowing alphanumeric characters and underscores
function isValidUsername(username) {
    var usernamePattern = /^[a-zA-Z0-9_]+$/;
    return usernamePattern.test(username);
}

// Function to validate password complexity
function isValidPassword(password) {
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[@#$%^&*!]/;

    var isLowercaseValid = lowercaseRegex.test(password);
    var isUppercaseValid = uppercaseRegex.test(password);
    var isDigitValid = digitRegex.test(password);
    var isSpecialCharValid = specialCharRegex.test(password);
    var isLengthValid = password.length >= 10;

    var errorMessage = "";

    if (!isLowercaseValid) {
        errorMessage += "Password must contain lowercase letters. ";
    }

    if (!isUppercaseValid) {
        errorMessage += "Password must contain uppercase letters. ";
    }

    if (!isDigitValid) {
        errorMessage += "Password must contain numbers. ";
    }

    if (!isSpecialCharValid) {
        errorMessage += "Password must contain special characters (@, #, $, %, ^, &, *, !). ";
    }

    if (!isLengthValid) {
        errorMessage += "Password must be at least 10 characters long. ";
    }

    if (errorMessage) {
        markInvalidInput("r_password", errorMessage);
        return false;
    }

    return true;
}

// Function to mark input fields as invalid and display error messages
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
});

// 验证当前用户状态
function checkCurrentUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // 用户已登录
            console.log("当前用户已登录:", user);

            // 在这里可以添加代码，处理已登录用户的操作
        } else {
            // 用户未登录
            console.log("当前用户未登录");

            // 在这里可以添加代码，处理未登录用户的操作
        }
    });
}

// 页面加载时检查当前用户状态
window.addEventListener("load", function () {
    checkCurrentUser();
});
