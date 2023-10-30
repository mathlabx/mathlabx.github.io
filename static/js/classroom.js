function receiveObject() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const jsonStr = urlParams.get('data'); // 假设你的参数名为 'data'

    if (jsonStr) {
        return JSON.parse(jsonStr); // 将 JSON 字符串转换为对象
    } else {
        window.location = "../404.html";
        return {}; // 如果没有有效的数据，返回空对象
    }
}

// 接收对象
const receivedClass = receiveObject();
console.log(receivedClass);

function is_adm() {
    for (let i = 0; i < Class_Data.people.length; i++) {
        if (Class_Data.people[i].user_id === APP.account.UID && Class_Data.people[i].administrator) return true;
    }
    return false;
}

let Class_Data;

function get_from_sever() {
    async function load() {
        const classesRef = firestore.collection('classes');
        const classQuery = classesRef.where('code', '==', receivedClass.code);

        const snapshot = await classQuery.get();
        if (!snapshot.empty) {
            snapshot.forEach((doc) => {
                const classData = doc.data();
                console.log("Class ID:", classData.code);
                console.log("Class name:", classData.name);
                console.log("Class description:", classData.description);
                Class_Data = classData;
                console.log(Class_Data);
                main();
            });
        } else {
            console.error("Error: Data does not exist.");
        }
    }
    load();
}

function openCustomPopup() {
    console.log("in pop");
    let obj = {
        Typ: "Teacher"
    };
    // 将包含数组的对象转换为 JSON 字符串
    const jsonStr = JSON.stringify(obj);
    // 将 JSON 字符串存储到 sessionStorage 中
    sessionStorage.setItem('myData', jsonStr);

    var myWindow = window.open(`https://app.mathscichem.com/app/x`, "_blank");
    if (!myWindow) {
        alert("The popup was blocked. Please allow popups for this site.");
    }
}

function openTest(G, S, T, I) {
    let obj = {
        Typ: "Test",
        G_Setting: G,
        Setting: S,
        Task_settings: T,
        Class_ID: receivedClass.code,
        Task_index: I
    };
    // 将包含数组的对象转换为 JSON 字符串
    const jsonStr = JSON.stringify(obj);
    // 将 JSON 字符串存储到 sessionStorage 中
    sessionStorage.setItem('myData', jsonStr);
    sessionStorage.setItem("Task_Index", I);
    window.location = "https://app.mathscichem.com/app/x";
}

let div_container;

const Class_Operate = {
    new_Task: (Task_Name, Due_Date, Disciption, people, Settings) => {
        let new_flow_block = document.createElement("div");
        new_flow_block.className = "flow-element";
        let task_title = document.createElement("h2");
        task_title.className = "task_title";
        task_title.innerHTML = Task_Name;
        let new_due_date = document.createElement("h3");
        new_due_date.className = "due_date";
        new_due_date.innerHTML = Due_Date[0];
        let new_Completeness = document.createElement("span");
        new_Completeness.className = "new_Completeness";
        if (!people || people.length === 0) {
            if (Due_Date[1] <= Date.now()) {
                new_Completeness.innerHTML = "missing";
                new_Completeness.style.color = "red";
            } else {
                new_Completeness.innerHTML = "assigned";
                new_Completeness.style.color = "gray";
            }
        } else if (people[APP.account.UID].UID == APP.account.UID) {
            if (people[APP.account.UID] && people[APP.account.UID].Completeness == true) {
                if (people[APP.account.UID].submitted_date <= Due_Date[1]) {
                    new_Completeness.innerHTML = "turned in";
                    new_Completeness.style.color = "green";
                } else {
                    new_Completeness.innerHTML = "turned in late";
                    new_Completeness.style.color = "yellow";
                }
            } else {
                if ((people[APP.account.UID] && people[APP.account.UID].submitted_date || 0) >= Due_Date[1] || (!people[APP.account.UID] || !people[APP.account.UID].submitted_date && Due_Date[1] <= Date.now())) {
                    new_Completeness.innerHTML = "missing";
                    new_Completeness.style.color = "red";
                } else {
                    new_Completeness.innerHTML = "assigned";
                    new_Completeness.style.color = "gray";
                }
            }
        } else if (Due_Date[1] <= Date.now()) {
            new_Completeness.innerHTML = "missing";
            new_Completeness.style.color = "red";
        } else {
            new_Completeness.innerHTML = "assigned";
            new_Completeness.style.color = "gray";
        }

        new_flow_block.append(task_title);
        new_flow_block.append(new_Completeness);
        new_flow_block.append(new_due_date);
        new_flow_block.addEventListener("click", function (people) {
            return function () {
                console.log(people);
                document.querySelector('.overlay').style.display = 'block';
                let new_page_con = document.createElement("div");
                new_page_con.id = "new_page_con";
                new_page_con.className = "new_page_con";
                let new_title = document.createElement("h1");
                new_title.className = "new_title";
                new_title.innerHTML = Task_Name;
                let new_due_date = document.createElement("h3");
                new_due_date.className = "due_date";
                new_due_date.innerHTML = Due_Date[0];
                let new_Completeness = document.createElement("span");
                new_Completeness.className = "new_Completeness";
                let new_GoToTest = document.createElement("button");
                new_GoToTest.innerHTML = "DO";
                new_GoToTest.className = "new_GoToTest";
                new_GoToTest.addEventListener("click", function () {
                    openTest(Settings[0], Settings[1], Settings[2], Settings[3]);
                })
                if (!people || !people.length) {
                    if (Due_Date[1] <= Date.now()) {
                        new_Completeness.innerHTML = "missing";
                        new_Completeness.style.color = "red";
                    } else {
                        new_Completeness.innerHTML = "assigned";
                        new_Completeness.style.color = "gray";
                    }
                } else if (people[APP.account.UID].UID == APP.account.UID) {
                    if (people[APP.account.UID] && people[APP.account.UID].Completeness === true) {
                        if (people[APP.account.UID].submitted_date <= Due_Date[1]) {
                            new_Completeness.innerHTML = "turned in";
                            new_Completeness.style.color = "green";
                        } else {
                            new_Completeness.innerHTML = "turned in late";
                            new_Completeness.style.color = "yellow";
                        }
                    } else {
                        if ((people[APP.account.UID] && people[APP.account.UID].submitted_date >= Due_Date[1]) || (!people[APP.account.UID] || !people[APP.account.UID].submitted_date && Due_Date[1] <= Date.now())) {
                            new_Completeness.innerHTML = "missing";
                            new_Completeness.style.color = "red";
                        } else {
                            new_Completeness.innerHTML = "assigned";
                            new_Completeness.style.color = "gray";
                        }
                    }
                } else if (Due_Date[1] <= Date.now()) {
                    new_Completeness.innerHTML = "missing";
                    new_Completeness.style.color = "red";
                } else {
                    new_Completeness.innerHTML = "assigned";
                    new_Completeness.style.color = "gray";
                }
                let new_dis = document.createElement("p");
                new_dis.className = "new_dis";
                new_dis.innerHTML = Disciption;
                let new_MPC_Test_Button = document.createElement("button");
                new_MPC_Test_Button.id = "new_MPC_Test_Button";
                new_MPC_Test_Button.className = "new_MPC_Test_Button";
                new_MPC_Test_Button.addEventListener("click", function () {

                });
                let new_close = document.createElement("button");
                new_close.innerHTML = "X";
                new_close.className = "new_close";
                new_close.addEventListener("click", function () {
                    document.getElementById("new_page_con").remove();
                    document.querySelector('.overlay').style.display = 'none';
                });
                new_page_con.append(new_title);
                new_page_con.append(new_due_date);
                new_page_con.append(new_Completeness);
                new_page_con.append(new_dis);
                new_page_con.append(new_GoToTest);
                new_page_con.append(new_close);
                div_container.append(new_page_con);
            }
        }(people));
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
            new_title.maxLength = "15";
            new_title.placeholder = "Task Title";
            new_title.value = "New Task";
            let new_time_label = document.createElement("label");
            new_time_label.innerHTML = "Due Date";
            new_time_label.className = "new_time_label";
            new_time_label.htmlFor = "new_date";
            let new_date = document.createElement("input");
            new_date.type = "date";
            new_date.id = "new_date";
            new_date.name = "Due Date";
            let new_time = document.createElement("input");
            new_time.type = "time";
            new_time.id = "new_time";
            new_time.name = "Due Time";
            let new_dis = document.createElement("textarea");
            new_dis.id = "new_dis_input";
            new_dis.maxLength = "70";
            new_dis.className = "new_dis_input";
            new_dis.placeholder = "Descriptions...";
            let Get_Setting_button = document.createElement("button");
            Get_Setting_button.id = "Get_Setting_button";
            Get_Setting_button.className = "Get_Setting_button";
            Get_Setting_button.innerHTML = "Link to a MPC Quiz/HomeWork";
            Get_Setting_button.addEventListener("click", function () {
                openCustomPopup();
            });
            let GL_Setting = false;
            window.addEventListener('message', function (e) {
                console.log("Event object from popup:", e);
                var dataFromPopup = JSON.parse(e.data);
                console.log("Data from popup:", dataFromPopup);
                console.log(e.data);
                GL_Setting = dataFromPopup;
                document.getElementById("Get_Setting_button").innerHTML = "Re Link";
                console.log(GL_Setting);
            });
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
                let Description = document.getElementById("new_dis_input").value;
                var dateInput = document.getElementById('new_date').value;
                var timeInput = document.getElementById('new_time').value;
                var dateTimeString = dateInput + 'T' + timeInput;
                var utcTimestamp = new Date(dateTimeString).getTime();
                console.log(GL_Setting);
                if (GL_Setting !== false) {
                    console.log(GL_Setting);
                    const classDocRef = firestore.collection('classes').doc(receivedClass.code);
                    classDocRef.get().then((doc) => {
                        if (doc.exists) {
                            let taskArray = doc.data().Task || [];
                            taskArray.push({
                                Title: Title,
                                Description: Description,
                                Due: utcTimestamp,
                                GL_Setting: {
                                    General_settings: GL_Setting[0],
                                    Question_settings: GL_Setting[1],
                                    Task_settings: GL_Setting[2]
                                }
                            });

                            classDocRef.update({ Task: taskArray })
                                .then(() => {
                                    console.log('Data has been successfully set.');
                                    location.reload(); // 刷新页面
                                })
                                .catch((error) => {
                                    console.error('Error occurred while setting data:', error);
                                });
                        } else {
                            console.error('No such document!');
                        }
                    }).catch((error) => {
                        console.error('Error getting document:', error);
                    });
                }
            });
            new_page_con.appendChild(new_title);
            new_page_con.appendChild(new_time_label);
            new_page_con.appendChild(new_date);
            new_page_con.appendChild(new_time);
            new_page_con.appendChild(Get_Setting_button);
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
    const today = new Date();
    const offset = -(today.getTimezoneOffset() / 60);
    const currentTimestamp = Date.now(); // 获取当前本地时间戳
    const localDate = new Date(utcTimestamp);
    const currentDate = new Date(currentTimestamp);

    // 获取本地时间与 UTC 时间的差值
    const timezoneOffset = localDate.getTimezoneOffset() * 60000;

    // 将 UTC 时间戳转换为本地时间戳
    const localTimestamp = utcTimestamp + timezoneOffset;

    // 将时间戳转换为日期
    const newLocalDate = new Date(localTimestamp);

    //检查是否晚
    let typ = "";

    // 检查日期是否为今天
    if (
        newLocalDate.getDate() === currentDate.getDate() &&
        newLocalDate.getMonth() === currentDate.getMonth() &&
        newLocalDate.getFullYear() === currentDate.getFullYear()
    ) {
        // 返回今天的小时和分钟
        const hours = String(newLocalDate.getHours()).padStart(2, '0');
        const minutes = String(newLocalDate.getMinutes()).padStart(2, '0');
        return [`Today, ${hours}:${minutes}`, typ];
    } else {
        // 返回日期和时间
        const year = newLocalDate.getFullYear();
        const month = String(newLocalDate.getMonth() + 1).padStart(2, '0');
        const day = String(newLocalDate.getDate()).padStart(2, '0');
        const hours = String(((newLocalDate.getHours()) + offset)).padStart(2, '0');
        const minutes = String(newLocalDate.getMinutes()).padStart(2, '0');
        return [`${year}-${month}-${day} ${hours}:${minutes}`, typ];
    }
}

function click_todo() {
    if (page_on != "todo") {
        div_container.innerHTML = "";
        for (let i = 0; Class_Data.Task && i < Class_Data.Task.length; i++) {
            Class_Operate.new_Task(Class_Data.Task[i].Title, [`Due ${from_UTC(Class_Data.Task[i].Due)[0]}`, Class_Data.Task[i].Due], Class_Data.Task[i].Description, Class_Data.Task[i].people, [Class_Data.Task[i].GL_Setting.General_settings, Class_Data.Task[i].GL_Setting.Question_settings, Class_Data.Task[i].GL_Setting.Task_settings, i]);
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


        for (let i = 0; i < Class_Data.people.length; i++) {
            (function (i) {
                let new_people = document.createElement("div");
                new_people.className = "flow-element";
                serverStorage.getItem("User", Class_Data.people[i].user_id).then((data) => {
                    console.log(data);

                    if (data) {
                        let people_name = document.createElement("h3");
                        people_name.innerHTML = data.Name;
                        /*
                        data.Info
                        data.Img
                        data.Gender
                        */
                        new_people.append(people_name);
                        div_container.append(new_people);
                    }
                });
            })(i);
        }
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