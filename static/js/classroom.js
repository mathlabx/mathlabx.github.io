function receiveObject() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const jsonStr = urlParams.get('data'); // 假设你的参数名为 'data'

    if (jsonStr) {
        return JSON.parse(jsonStr); // 将 JSON 字符串转换为对象
    } else {
        return {}; // 如果没有有效的数据，返回空对象
    }
}

// 接收对象
const receivedClass = receiveObject();
console.log(receivedClass);

let Class_Data;

function get_from_sever() {
    async function load() {
        const classesRef = firebase.database().ref('classes');
        const classQuery = classesRef.orderByChild('code').equalTo(receivedClass.code);

        const snapshot = await classQuery.once('value');
        if (snapshot.exists()) {
            const classData = snapshot.val();
            const values = Object.values(classData);
            for (const classItem of values) {
                console.log("Class ID:", classItem.code);
                console.log("Class name:", classItem.name);
                console.log("Class description:", classItem.description);
                Class_Data = classItem;
            }
        } else {
            APP.log("Error: Data does not exist.");
        }
    }
    load();
}

let div_container;

const Class_Operate = {
    new_Task: (Task_Name, Due_Date, T_ID) => {
        let new_flow_block = document.createElement("div");
        new_flow_block.className = "flow-element";
        let task_title = document.createElement("h2");
        task_title.className = "task_title";
        task_title.innerHTML = Task_Name;
        let new_due_date = document.createElement("h3");
        new_due_date.className = "due_date";
        new_due_date.innerHTML = Due_Date;
        new_flow_block.append(task_title);
        new_flow_block.append(new_due_date);
        new_flow_block.addEventListener("click", function (T_ID) {
            return function () {
                console.log(T_ID);
                document.querySelector('.overlay').style.display = 'block';
                let new_page_con = document.createElement("div");
                new_page_con.id = "new_page_con";
                new_page_con.className = "new_page_con";
                let new_title = document.createElement("h1");
                new_title.className = "new_title";
                new_title.innerHTML = Task_Name;
                let new_dis = document.createElement("new_dis");
                new_dis.className = "new_dis";
                new_dis.innerHTML = "disdis dis dis sjsandjknbj sdjaabdhsaweujhdbi2";
                let new_close = document.createElement("button");
                new_close.innerHTML = "X";
                new_close.className = "new_close";
                new_close.addEventListener("click", function () {
                    document.getElementById("new_page_con").remove();
                    document.querySelector('.overlay').style.display = 'none';
                });
                new_page_con.append(new_title);
                new_page_con.append(new_dis);
                new_page_con.append(new_close);
                div_container.append(new_page_con);
            }
        }(T_ID));
        div_container.append(new_flow_block);
    }
};

let page_on = "todo";

function click_todo() {
    if (page_on != "todo") {
        div_container = "";
        Class_Data
    }
}

function click_people() {
    if (page_on != "people") {
        div_container = "";
    }
}

function click_setting() {
    if (page_on != "setting") {
        div_container = "";
    }
}

window.addEventListener("load", function () {
    div_container = document.getElementById("container");
    let new_cover = document.createElement("div");
    new_cover.className = "overlay";
    div_container.append(new_cover);
    document.querySelector('.overlay').style.display = 'none';
    get_from_sever();
    click_todo();
});