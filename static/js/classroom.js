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

function is_adm() {
    for (let i = 0; i < Class_Data.people.length; i++) {
        if (Class_Data.people[i] === APP.account.UID) return true;
    }
    return false;
}

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
                console.log(Class_Data);
            }
        } else {
            APP.log("Error: Data does not exist.");
        }
    }
    load();
}

let div_container;

const Class_Operate = {
    new_Task: (Task_Name, Due_Date, Disciption, URL, T_ID) => {
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
                let new_dis = document.createElement("p");
                new_dis.className = "new_dis";
                new_dis.innerHTML = Disciption;
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
    },

    ADD_new_Task: () => {
        let new_flow_block = document.createElement("div");
        new_flow_block.className = "flow-element";
        let task_title = document.createElement("h2");
        task_title.className = "task_title";
        task_title.innerHTML = "+";
        let new_due_date = document.createElement("h3");
        new_due_date.className = "due_date";
        new_due_date.innerHTML = "Post New Task";
        new_flow_block.append(task_title);
        new_flow_block.append(new_due_date);
        new_flow_block.addEventListener("click", function (T_ID) {
            return function () {
                console.log(T_ID);
                document.querySelector('.overlay').style.display = 'block';
                let new_page_con = document.createElement("div");
                new_page_con.id = "new_page_con";
                new_page_con.className = "new_page_con";
                let new_title = document.createElement("input");
                new_title.id = "new_title_input";
                new_title.className = "new_title_input";
                new_title.maxLength = "15";
                new_title.placeholder = "Task Title";
                new_title.value = "New Task";
                let new_time_lable = document.createElement("label");
                new_time_lable.innerHTML = "Due Date";
                new_time_lable.className = "new_time_lable";
                new_time_lable.for = "new_datenew_time";
                let new_day = document.createElement("input");
                new_time.type = "date";
                new_time.id = "new_date";
                new_time.name = "Due Date";
                let new_time = document.createElement("input");
                new_time.type = "time";
                new_time.id = "new_time";
                new_time.name = "Due Time";
                let new_dis = document.createElement("textarea");
                new_dis.id = "new_dis_input";
                new_dis.maxLength = "70";
                new_dis.className = "new_dis_input";
                new_dis.placeholder = "Discriptions...";
                let new_close = document.createElement("button");
                new_close.innerHTML = "X";
                new_close.className = "new_close";
                new_close.addEventListener("click", function () {
                    document.getElementById("new_page_con").remove();
                    document.querySelector('.overlay').style.display = 'none';
                });
                let new_task_button = document.createElement("button");
                new_task_button.className = "new_task_button";
                new_task_button.addEventListener("click", function () {
                    let Title = document.getElementById("new_title_input").value;
                    let Disciptions = document.getElementById("new_dis_input").value;
                    var dateInput = document.getElementById('new_date').value;
                    var timeInput = document.getElementById('new_time').value;
                    var dateTimeString = dateInput + 'T' + timeInput; // 合并日期和时间字符串
                    var utcTimestamp = new Date(dateTimeString).getTime(); // 转换为UTC时间戳
                    let Due = utcTimestamp;
                    let TsURL = null;
                    const taskRef = firebase.database().ref(`classes/${receiveObject.code}/task`);
                    taskRef.once('value', (snapshot) => {
                        const peopleData = snapshot.val();
                        const peopleArray = peopleData ? Object.values(peopleData) : [];
                        peopleArray.push({
                            Title: Title,
                            Disciptions: Disciptions,
                            Due: Due,
                            TsURL: TsURL
                        });
                        taskRef.set(peopleArray);
                    });
                });
                new_page_con.append(new_title);
                new_page_con.append(new_time_lable);
                new_page_con.append(new_day);
                new_page_con.append(new_time);
                new_page_con.append(new_dis);
                new_page_con.append(new_close);
                div_container.append(new_page_con);
            }
        }(T_ID));
        div_container.insertAdjacentHTML("beforebegin", new_flow_block);
    }
};

let page_on = "todo";

function to_UTC() {
    return Date.now(); // 返回当前的 UTC 时间戳
}

function from_UTC(utcTimestamp) {
    const currentTimestamp = Date.now(); // 获取当前本地时间戳

    // 将 UTC 时间戳转换为本地时间戳
    const localTimestamp = utcTimestamp + (new Date().getTimezoneOffset() * 60000);

    // 将时间戳转换为日期
    const localDate = new Date(localTimestamp);
    const currentDate = new Date(currentTimestamp);

    // 检查日期是否为今天
    if (
        localDate.getDate() === currentDate.getDate() &&
        localDate.getMonth() === currentDate.getMonth() &&
        localDate.getFullYear() === currentDate.getFullYear()
    ) {
        return 'Today';
    } else {
        return localDate.toDateString(); // 返回本地时间的日期字符串
    }
}

function click_todo() {
    if (page_on != "todo") {
        div_container = "";
        for (let i = 0; i < Class_Data.Task.length; i++) {
            Class_Operate.new_Task(Class_Data.Task[i].Title, from_UTC(Class_Data.Task[i].Due), Class_Data.Task[i].Disciption, Class_Data.Task[i].ASM_Key);
        }
        if (is_adm()) {
            Class_Operate.ADD_new_Task();
        }
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