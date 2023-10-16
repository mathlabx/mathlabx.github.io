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
        if (Class_Data.people[i].user_id === APP.account.UID) return true;
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
                main();
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
        new_flow_block.appendChild(task_title);
        new_flow_block.appendChild(new_due_date);
        new_flow_block.addEventListener("click", function () {
            document.querySelector('.overlay').style.display = 'block';
            let new_page_con = document.createElement("div");
            new_page_con.id = "new_page_con";
            new_page_con.className = "new_page_con";
            let new_title = document.createElement("input");
            new_title.id = "new_title_input";
            new_title.className = "new_title_input";
            new_title.maxLength = "15"; // 正确的属性是 maxLength，而不是 maxlength
            new_title.placeholder = "Task Title";
            new_title.value = "New Task";
            let new_time_label = document.createElement("label");
            new_time_label.innerHTML = "Due Date"; // 正确的拼写是 label
            new_time_label.className = "new_time_label"; // 正确的拼写是 label
            new_time_label.htmlFor = "new_date"; // 正确的属性是 htmlFor
            let new_date = document.createElement("input"); // 正确的变量名是 new_date
            new_date.type = "date";
            new_date.id = "new_date";
            new_date.name = "Due Date";
            let new_time = document.createElement("input");
            new_time.type = "time";
            new_time.id = "new_time";
            new_time.name = "Due Time";
            let new_dis = document.createElement("textarea");
            new_dis.id = "new_dis_input";
            new_dis.maxLength = "70"; // 正确的属性是 maxLength
            new_dis.className = "new_dis_input";
            new_dis.placeholder = "Descriptions..."; // 正确的拼写是 Descriptions
            let new_close = document.createElement("button");
            new_close.innerHTML = "X";
            new_close.className = "new_close";
            new_close.addEventListener("click", function () {
                document.getElementById("new_page_con").remove();
                document.querySelector('.overlay').style.display = 'none';
            });
            let new_task_button = document.createElement("button");
            new_task_button.innerHTML = "Assign";
            new_task_button.className = "new_task_button";
            new_task_button.addEventListener("click", function () {
                let Title = document.getElementById("new_title_input").value;
                let Descriptions = document.getElementById("new_dis_input").value;
                var dateInput = document.getElementById('new_date').value;
                var timeInput = document.getElementById('new_time').value;
                var dateTimeString = dateInput + 'T' + timeInput;
                var utcTimestamp = new Date(dateTimeString).getTime();
                let Due = utcTimestamp;
                function openCustomPopup() {
                    let obj = {
                        Typ: "Teacher"
                    }
                    // 将包含数组的对象转换为 JSON 字符串
                    const jsonStr = JSON.stringify(obj);
                    // 将 JSON 字符串存储到 sessionStorage 中
                    sessionStorage.setItem('myData', jsonStr);

                    var myWindow = window.open(`https://app.mathscichem.com/app/x`, "_blank", "width=600, height=600");
                    if (!myWindow) {
                        alert("The popup was blocked. Please allow popups for this site.");
                    }
                }
                window.addEventListener('message', function (e) {
                    if (e.origin === 'null') {
                        var dataFromPopup = JSON.parse(e.data);
                        console.log("Data from popup:", dataFromPopup);
                        let GL_Setting = dataFromPopup;
                        const taskRef = firebase.database().ref(`classes/${receivedClass.code}/Task`);
                        taskRef.once('value', (snapshot) => {
                            const peopleData = snapshot.val();
                            let peopleArray = [];
                            if (Array.isArray(peopleData)) {
                                peopleArray = peopleData;
                            } else if (peopleData) {
                                peopleArray = Object.values(peopleData);
                            }
                            peopleArray.push({
                                Title: Title,
                                Disciption: Descriptions,
                                Due: Due,
                                GL_Setting: GL_Setting
                            });
                            taskRef.set(peopleArray, (error) => {
                                if (error) {
                                    console.error('Error occurred while setting data:', error);
                                } else {
                                    console.log('Data has been successfully set.');
                                    location.reload(); // 刷新页面
                                }
                            });
                        });
                    }
                });
            });
            new_page_con.appendChild(new_title);
            new_page_con.appendChild(new_time_label);
            new_page_con.appendChild(new_date);
            new_page_con.appendChild(new_time);
            new_page_con.appendChild(new_dis);
            new_page_con.appendChild(new_task_button);
            new_page_con.appendChild(new_close);
            div_container.appendChild(new_page_con); // 使用 appendChild 方法将元素添加到 div_container 中
        });
        div_container.prepend(new_flow_block);
    }
};

let page_on = "";

function to_UTC() {
    return Date.now(); // 返回当前的 UTC 时间戳
}

function from_UTC(utcTimestamp) {
    const currentTimestamp = Date.now(); // 获取当前本地时间戳
    const localDate = new Date(utcTimestamp);
    const currentDate = new Date(currentTimestamp);

    // 获取本地时间与 UTC 时间的差值
    const timezoneOffset = localDate.getTimezoneOffset() * 60000;

    // 将 UTC 时间戳转换为本地时间戳
    const localTimestamp = utcTimestamp + timezoneOffset;

    // 将时间戳转换为日期
    const newLocalDate = new Date(localTimestamp);

    // 检查日期是否为今天
    if (
        newLocalDate.getDate() === currentDate.getDate() &&
        newLocalDate.getMonth() === currentDate.getMonth() &&
        newLocalDate.getFullYear() === currentDate.getFullYear()
    ) {
        // 返回今天的小时和分钟
        const hours = String(newLocalDate.getHours()).padStart(2, '0');
        const minutes = String(newLocalDate.getMinutes()).padStart(2, '0');
        return `Today, ${hours}:${minutes}`;
    } else {
        // 返回日期和时间
        const year = newLocalDate.getFullYear();
        const month = String(newLocalDate.getMonth() + 1).padStart(2, '0');
        const day = String(newLocalDate.getDate()).padStart(2, '0');
        const hours = String(newLocalDate.getHours()).padStart(2, '0');
        const minutes = String(newLocalDate.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }
}

function click_todo() {
    if (page_on != "todo") {
        div_container.innerHTML = "";
        for (let i = 0; i < Class_Data.Task?.length; i++) {
            Class_Operate.new_Task(Class_Data.Task[i].Title, `Due ${from_UTC(Class_Data.Task[i].Due)}`, Class_Data.Task[i].Disciption, Class_Data.Task[i].ASM_Key);
        }
        if (is_adm()) {
            Class_Operate.ADD_new_Task();
        }
        page_on = "todo";
    }
}

function click_people() {
    if (page_on != "people") {
        div_container.innerHTML = "";
        page_on = "people";
    }
}

function click_setting() {
    if (page_on != "setting") {
        div_container.innerHTML = "";
        page_on = "setting";
    }
}

function main() {
    div_container = document.getElementById("container");
    setTimeout(() => {
        let new_cover = document.createElement("div");
        new_cover.className = "overlay";
        div_container.append(new_cover);
        document.querySelector('.overlay').style.display = 'none';
    }, 100);
    click_todo();
}

window.addEventListener("load", function () {
    get_from_sever();
});