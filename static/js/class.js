function class_update() {
    let container = document.getElementById("container");
    for (i = 0; i < APP.class.length; i++) {
        let new_flow = document.createElement("div");
        new_flow.className = "flow-element";
        let new_title = document.createElement("h2");
        new_title.innerHTML = APP.class[i].name;
        new_flow.append(new_title);
        let new_p = document.createElement("p");
        new_p.innerText = APP.class[i].description;
        new_flow.append(new_p);
        (function (index) {
            new_flow.addEventListener("click", function () {
                into_class(APP.class[index]);
            });
        })(i);
        container.append(new_flow);
    }
}

//课堂加入，创建
var isFormOpen = false;
var formContainer = null;

function toggleForm() {
    var form_button = document.getElementById("join_button");

    if (!formContainer) {
        openForm();
        form_button.innerHTML = "Close";
        isFormOpen = true;
    } else {
        if (isFormOpen) {
            formContainer.style.display = 'none';
            form_button.innerHTML = "Join/Create Class";
            isFormOpen = false;
        } else {
            formContainer.style.display = 'flex';
            form_button.innerHTML = "Close";
            isFormOpen = true;
        }
    }
}


function openForm() {
    formContainer = document.createElement('div');
    formContainer.id = 'formContainer';
    formContainer.className = 'form-container';

    var classroomCodeInput = createInput('Classroom 7-digit Code');
    classroomCodeInput.id = "7d_code";
    formContainer.appendChild(classroomCodeInput);

    var classroomCodeError = document.createElement('div');
    classroomCodeError.className = 'error';
    formContainer.appendChild(classroomCodeError);

    var submitButton = document.createElement('button');
    submitButton.textContent = 'Join';
    submitButton.style.padding = '10px';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';
    submitButton.addEventListener("click", function () {
        join_class(false);
    });
    formContainer.appendChild(submitButton);

    var classroomNameInput = createInput('Class name');
    classroomNameInput.id = "classroomNameInput";
    formContainer.appendChild(classroomNameInput);

    var classroomNameError = document.createElement('div');
    classroomNameError.className = 'error';
    formContainer.appendChild(classroomNameError);

    var classroomDescriptionInput = createTextArea('Class introduction');
    classroomDescriptionInput.id = "classroomDescriptionInput";
    formContainer.appendChild(classroomDescriptionInput);

    var classroomDescriptionError = document.createElement('div');
    classroomDescriptionError.className = 'error';
    formContainer.appendChild(classroomDescriptionError);

    var createButton = document.createElement('button');
    createButton.id = "createButton";
    createButton.style.padding = '10px';
    createButton.style.color = 'white';
    createButton.style.border = 'none';
    createButton.style.borderRadius = '4px';
    createButton.style.cursor = 'pointer';
    createButton.textContent = 'Create';
    createButton.onclick = creat_class;
    formContainer.appendChild(createButton);
    document.body.appendChild(formContainer);
}

function createInput(placeholder) {
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    return input;
}

function createTextArea(placeholder) {
    var textarea = document.createElement('textarea');
    textarea.placeholder = placeholder;
    return textarea;
}

var classroomCode;
function validateJoin() {
    var classroomCodeInput = document.getElementById('7d_code');
    classroomCode = classroomCodeInput.value;

    var classroomCodeRegex = /^[0-9A-Fa-f]{7}$/;
    var classroomCodeError = document.getElementById('formContainer').children[1];

    classroomCodeError.textContent = '';

    if (!classroomCodeRegex.test(classroomCode)) {
        setInvalidInput(classroomCodeInput, 'Class code must be 7 hexadecimal characters.', classroomCodeError);
        return false;
    }

    return true;
}

var classroomName;
var classroomDescription;
function validateCreate() {
    var classroomNameInput = document.getElementById('classroomNameInput');
    var classroomDescriptionInput = document.getElementById('classroomDescriptionInput');

    classroomName = classroomNameInput.value;
    classroomDescription = classroomDescriptionInput.value;

    var classroomNameRegex = /^.{5,20}$/;
    var classroomDescriptionRegex = /^.{10,35}$/;

    var classroomNameError = document.getElementById('formContainer').children[3];
    var classroomDescriptionError = document.getElementById('formContainer').children[6];

    classroomNameError.textContent = '';
    classroomDescriptionError.textContent = '';

    var isNameValid = true;
    var isDescriptionValid = true;

    if (!classroomNameRegex.test(classroomName)) {
        setInvalidInput(classroomNameInput, 'Class name must be 5-20 characters.', classroomNameError);
        isNameValid = false;
    }

    if (!classroomDescriptionRegex.test(classroomDescription)) {
        setInvalidInput(classroomDescriptionInput, 'Class introduction must be 10-35 characters.', classroomDescriptionError);
        isDescriptionValid = false;
    }

    return isNameValid && isDescriptionValid;
}

function setInvalidInput(inputElement, errorMessage, errorElement) {
    inputElement.style.borderColor = "red";
    inputElement.setCustomValidity(errorMessage);
    inputElement.reportValidity();
    errorElement.textContent = errorMessage;
}

async function join_class(adm, classroomCode) {
    if (validateJoin()) {
        const classesRef = firebase.database().ref('classes');
        const classQuery = classesRef.orderByChild('code').equalTo(classroomCode);

        const snapshot = await classQuery.once('value');
        if (snapshot.exists()) {
            const classData = snapshot.val();
            console.log("Class name:", classData.name);
            console.log("Class description:", classData.description);

            // Update the user's class list
            const userRef = firebase.database().ref('User/' + APP.account.UID);
            userRef.once('value', (snapshot) => {
                const userData = snapshot.val();
                if (userData && userData.Class) {
                    if (!userData.Class.includes(classroomCode)) {
                        userData.Class.push(classroomCode);
                        userRef.update({ Class: userData.Class });
                    }
                } else {
                    userRef.update({ Class: [classroomCode] });
                }

                // Create a new branch for people and store the user's id and adm parameter
                const peopleRef = firebase.database().ref(`classes/${classroomCode}/people`);
                peopleRef.once('value', (snapshot) => {
                    const peopleData = snapshot.val();
                    const peopleArray = peopleData ? Object.values(peopleData) : [];
                    peopleArray.push({
                        user_id: APP.account.UID,
                        administrator: adm
                    });
                    peopleRef.set(peopleArray);
                });

                setTimeout(() => {
                    document.location.reload();
                }, 500);
            });
        } else {
            console.log("Data does not exist.");
        }
    }
}

async function creat_class() {
    if (validateCreate()) {
        const classesRef = firebase.database().ref('classes');
        const classQuery = classesRef.orderByChild('name').equalTo(classroomName);

        const snapshot = await classQuery.once('value');
        if (snapshot.exists()) {
            const classData = snapshot.val();
            const values = Object.values(classData);
            for (const classItem of values) {
                console.log("Class name:", classItem.name);
                console.log("Class description:", classItem.description);
            }
        } else {
            let classroomCode = generateRandomCode();

            // Check if the database already contains this ID, if it does, generate a new one
            const snapshot = await classesRef.child(classroomCode).once('value');
            while (snapshot.exists()) {
                classroomCode = generateRandomCode();
                snapshot = await classesRef.child(classroomCode).once('value');
            }

            const newClassRef = classesRef.child(classroomCode);
            newClassRef.set({
                code: classroomCode,
                name: classroomName,
                description: classroomDescription
            });

            const createdClassQuery = classesRef.orderByChild('code').equalTo(classroomCode);
            const createdSnapshot = await createdClassQuery.once('value');
            if (createdSnapshot.exists()) {
                const createdClassData = createdSnapshot.val();
                const values = Object.values(createdClassData);
                for (const createdClassItem of values) {
                    console.log("Created Class ID:", createdClassItem.code);
                    console.log("Created Class name:", createdClassItem.name);
                    console.log("Created Class description:", createdClassItem.description);
                    document.getElementById("7d_code").value = createdClassItem.code;
                    setTimeout(() => {
                        join_class(true, createdClassItem.code); // Pass the class code to the join_class function
                    }, 100);
                }
            }
            console.log("Data created successfully.");
        }
    }
}


// 生成随机的 7 位 16 进制字符
function generateRandomCode() {
    let result = '';
    const characters = 'ABCDEF0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

window.addEventListener("load", function () {
    if (!APP.login) window.location = "../account/login.html";
    setTimeout(() => {
        serverStorage.getItem("User", APP.account.UID).then((data) => {
            if (data) {
                if (!data.Class?.length) data.Class = [];
                async function load() {
                    for (let i = 0; i < data.Class.length; i++) {
                        const classesRef = firebase.database().ref('classes');
                        const classQuery = classesRef.orderByChild('code').equalTo(data.Class[i]);

                        const snapshot = await classQuery.once('value');
                        if (snapshot.exists()) {
                            const classData = snapshot.val();
                            const values = Object.values(classData);
                            for (const classItem of values) {
                                console.log("Class ID:", classItem.code);
                                console.log("Class name:", classItem.name);
                                console.log("Class description:", classItem.description);
                                APP.class.push({
                                    code: classItem.code,
                                    name: classItem.name,
                                    description: classItem.description
                                });
                            }
                        } else {
                            console.log("Data does not exist.");
                        }
                    }
                    if (!APP.class) APP.class = [];
                    document.getElementById("join_button").onclick = toggleForm;
                    class_update();
                }
                load();
            }
        });
    }, 300);
});

function into_class(class_id) {
    function sendObject(obj) {
        // 将包含数组的对象转换为 JSON 字符串
        const jsonStr = JSON.stringify(obj);

        // 在这里将 JSON 字符串作为查询参数发送到 classroom.html
        const queryString = new URLSearchParams({ data: jsonStr }).toString();
        const url = "classroom.html?" + queryString; // 在这里替换成接收文件的路径
        window.location.href = url;
    }
    sendObject(class_id);
}

/*function into_class(class_id) {
    function sendObject(obj) {
        // 将包含数组的对象转换为 JSON 字符串
        const jsonStr = JSON.stringify(obj);

        // 将 JSON 字符串存储到 sessionStorage 中
        sessionStorage.setItem('myData', jsonStr);

        // 转到 classroom.html 页面
        const url = "classroom.html";
        window.location.href = url;
    }
    sendObject(class_id);
}
*/