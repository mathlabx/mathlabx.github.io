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
    const userData = {
        Name: userinput_name,
        Email: userinput_email,
        Password: userinput_password,
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

window.addEventListener("load", function () {
    if (APP.login) {
        window.location = "../";
    }
})