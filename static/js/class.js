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
        join_class(false, document.getElementById("7d_code").value);
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
        const classesRef = firestore.collection('classes');
        const classQuery = classesRef.where('code', '==', classroomCode);

        const querySnapshot = await classQuery.get();
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                const classData = doc.data();
                console.log("Class name:", classData.name);
                console.log("Class description:", classData.description);

                // Update the user's class list
                const userRef = firestore.collection('User').doc(APP.account.UID);
                userRef.get().then((userDoc) => {
                    const userData = userDoc.data();
                    if (userData && userData.Class) {
                        if (!userData.Class.includes(classroomCode)) {
                            userData.Class.push(classroomCode);
                            userRef.update({ Class: userData.Class });
                        }
                    } else {
                        userRef.set({ Class: [classroomCode] });
                    }

                    // Create a new subcollection for people and store the user's id and adm parameter
                    const classRef = firestore.collection('classes').doc(classroomCode);

                    classRef.get().then((doc) => {
                        if (doc.exists) {
                            const classData = doc.data();
                            let peopleArray = classData.people ? classData.people : [];
                            peopleArray.push({
                                user_id: APP.account.UID,
                                administrator: adm
                            });
                            classRef.update({
                                people: peopleArray
                            }).then(() => {
                                console.log('People array updated successfully.');
                            }).catch((error) => {
                                console.error('Error updating people array:', error);
                            });
                        } else {
                            console.error('Document does not exist.');
                        }
                    });

                    setTimeout(() => {
                        document.location.reload();
                    }, 500);
                });
            });
        } else {
            console.log("Data does not exist.");
        }
    }
}

async function creat_class() {
    if (validateCreate()) {
        const classesRef = firestore.collection('classes');
        const classQuery = classesRef.where('name', '==', classroomName);

        const querySnapshot = await classQuery.get();
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                const classData = doc.data();
                console.log("Class name:", classData.name);
                console.log("Class description:", classData.description);
            });
        } else {
            let classroomCode = generateRandomCode();

            const newClassRef = classesRef.doc(classroomCode);
            newClassRef.set({
                code: classroomCode,
                name: classroomName,
                description: classroomDescription
            });

            const createdClassQuery = classesRef.where('code', '==', classroomCode);
            const createdSnapshot = await createdClassQuery.get();
            if (!createdSnapshot.empty) {
                createdSnapshot.forEach((doc) => {
                    const createdClassData = doc.data();
                    console.log("Created Class ID:", createdClassData.code);
                    console.log("Created Class name:", createdClassData.name);
                    console.log("Created Class description:", createdClassData.description);
                    document.getElementById("7d_code").value = createdClassData.code;
                    setTimeout(() => {
                        join_class(true, createdClassData.code); // Pass the class code to the join_class function
                    }, 100);
                });
            }
            console.log("Data created successfully.");
        }
    }
}

async function delete_class(classroomCode) {
    try {
        const classRef = firestore.collection('classes').doc(classroomCode);
        await classRef.delete();
        console.log("Class with code", classroomCode, "has been deleted.");
        // Perform any other necessary actions after deleting the class
    } catch (error) {
        console.error("Error occurred while deleting the class:", error);
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
                        const classesRef = firestore.collection('classes');
                        const classQuery = classesRef.where('code', '==', data.Class[i]);

                        const querySnapshot = await classQuery.get();
                        if (!querySnapshot.empty) {
                            querySnapshot.forEach((doc) => {
                                const classData = doc.data();
                                console.log("Class ID:", classData.code);
                                console.log("Class name:", classData.name);
                                console.log("Class description:", classData.description);
                                APP.class.push({
                                    code: classData.code,
                                    name: classData.name,
                                    description: classData.description,
                                    administrator: classData.administrator
                                });
                            });
                        } else {
                            console.log("Data does not exist.");
                        }
                    }
                    if (!APP.class) APP.class = [];
                    setTimeout(() => {
                        document.getElementById("join_button").addEventListener("click", function () {
                            toggleForm();
                        });
                    }, 100);
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