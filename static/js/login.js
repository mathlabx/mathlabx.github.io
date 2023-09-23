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
           /* APP.get_from_server();*/
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

    // Validate email format and whether it's filled
    if (!userinput_email) {
        markInvalidInput("r_email", "Email cannot be empty");
        return;
    } else if (!isValidEmail(userinput_email)) {
        markInvalidInput("r_email", "Please enter a valid email address");
        return;
    }

    // Validate username length and characters
    if (!isValidUsername(userinput_name)) {
        markInvalidInput("r_username", "Username can only contain alphanumeric characters and underscores");
        return;
    } else if (userinput_name.length < 6 || userinput_name.length > 16) {
        markInvalidInput("r_username", "Username must be between 6 and 16 characters");
        return;
    }

    // Validate password complexity
    if (!isValidPassword(userinput_password)) {
        markInvalidInput("r_password", "Password must contain letters, both uppercase and lowercase, numbers, and at least one special character, and be at least 10 characters long");
        return;
    }

    if (!userinput_info) {
        markInvalidInput("r_info", "Bio cannot be empty");
        return;
    }

    // Validate bio character length
    if (userinput_info.length > 40) {
        markInvalidInput("r_info", "Bio cannot exceed 40 characters");
        return;
    }

    if (userinput_gender == "null") {
        markInvalidInput("r_gender", "Please select a gender");
        return;
    }

    // Validate and modify image URL
    if (!isValidImageUrl(userinput_img)) {
        markInvalidInput("r_img", "Please enter a valid image URL");
        return;
    } else {
        // Use a new Image object to load and check the image
        var img = new Image();
        img.src = userinput_img;

        img.onload = function () {
            // The image loaded successfully, you can access its width and height
            if (img.width > 0 && img.height > 0) {
                // If the image has width and height, it's a valid image
                // Proceed with registration logic here
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
            } else {
                markInvalidInput("r_img", "The provided URL does not contain a valid image");
            }
        };

        img.onerror = function () {
            // An error occurred while loading the image
            markInvalidInput("r_img", "Error loading the image from the provided URL");
        };
    }
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
})
