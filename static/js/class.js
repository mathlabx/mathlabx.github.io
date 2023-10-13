function class_update() {
    let container = document.getElementById("container");
    for (i = 0; i < APP.class.length; i++) {
        let new_flow = document.createElement("div");
        new_flow.className = "flow-element";
        let new_title = document.createElement("h2");
        new_title.innerHTML = APP.class[i].title;
        new_flow.append(new_title);
        let new_p = document.createElement("p");
        new_p.innerText = APP.class[i].description;
        new_flow.append(new_p);
        new_flow.addEventListener("click", function () {

        });
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
    submitButton.onclick = join_class;
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

async function join_class() {
    if (validateJoin()) {
        const classesRef = firebase.database().ref('classes');
        const classQuery = classesRef.orderByChild('code').equalTo(classroomCode);

        const snapshot = await classQuery.once('value');
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const classData = childSnapshot.val();
                console.log("Class name:", classData.name);
                console.log("Class description:", classData.description);
            });
        } else {
            console.log("Data does not exist.");
        }
    }
}

// 在 creat_class 函数中检查数据是否存在，如果不存在则创建
async function creat_class() {
    if (validateCreate()) {
        const classesRef = firebase.database().ref('classes');
        const classQuery = classesRef.orderByChild('name').equalTo(classroomName);

        const snapshot = await classQuery.once('value');
        if (snapshot.exists()) {
            const classData = snapshot.val();
            console.log("Class name:", classData.name);
            console.log("Class description:", classData.description);
        } else {
            // 生成随机的 7 位 16 进制字符
            const classroomCode = generateRandomCode();

            const newClassRef = classesRef.push();
            newClassRef.set({
                code: classroomCode,
                name: classroomName,
                description: classroomDescription
            });
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
                APP.class = data.Class;
                if (!APP.class) APP.class = [];
                document.getElementById("join_button").onclick = toggleForm;
                class_update();
            }
        });
    }, 300);
});