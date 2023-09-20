let APP = new Object();
APP.apps = new Object();
APP.liked = new Object();
APP.account = new Object();
APP.login = false;
APP.get_from_server = function () {
    var loco_name = localStorage.getItem("User_Name");
    if (loco_name) {
        serverStorage.getItem("User", loco_name, (data) => {
            console.log(data);
            localStorage.setItem("User_Name", data.Name);
            localStorage.setItem("User_Email", data.Email);
            localStorage.setItem("User_Info", data.Info);
        });
    }
}

/*在此处配置APP的索引*/
APP.apps = [{
    title: "QuizMatic Pro",
    description: "Generate math, physics, chemistry, and astrophysics tests for elementary to high school levels effortlessly. Enjoy a wide range of problem types, including calculations, word problems, judgments, and proofs.",
    img: "https://app.mathscichem.com/static/img/app/x.png",
    full_line: true,
    hot: true,
    url: "https://app.mathscichem.com/app/x/"
}, {
    title: "Quadratic Equation Calculator",
    description: "quadratic equation calculatorQuadratic Equation Calculator is a calculator that can calculate various forms of Quadratic Equation.",
    img: "pic.png",
    full_line: false,
    hot: false,
    url: "https://app.mathscichem.com/app/Quadratic_Equation_Calculator/"
}];

APP.account = {
    username: localStorage.getItem("User_Name"),
    useremail: localStorage.getItem("User_Email"),
    userinfo: localStorage.getItem("User_Info"),
    $l: localStorage.getItem("key"),
    $s: "not login"
}

if (localStorage.getItem("login") == "true") APP.login = true;

if (APP.login) {
    APP.account.$s = APP.account.$l;
    //暂时不适应key
}

window.addEventListener("load", function () {
    user_page_update();
})