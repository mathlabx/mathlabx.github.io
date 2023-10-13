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
    submitButton.onclick = validateJoin;
    formContainer.appendChild(submitButton);

    var classroomNameInput = createInput('Class name');
    formContainer.appendChild(classroomNameInput);

    var classroomNameError = document.createElement('div');
    classroomNameError.className = 'error';
    formContainer.appendChild(classroomNameError);

    var classroomDescriptionInput = createTextArea('Class introduction');
    formContainer.appendChild(classroomDescriptionInput);

    var classroomDescriptionError = document.createElement('div');
    classroomDescriptionError.className = 'error';
    formContainer.appendChild(classroomDescriptionError);

    var createButton = document.createElement('button');
    createButton.style.padding = '10px';
    createButton.style.color = 'white';
    createButton.style.border = 'none';
    createButton.style.borderRadius = '4px';
    createButton.style.cursor = 'pointer';
    createButton.textContent = 'Create';
    createButton.onclick = creat_class;
    createButton.onclick = validateCreate;
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
    var classroomCodeInput = document.getElementById('formContainer').children[0];
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
    var classroomNameInput = document.getElementById('formContainer').children[2];
    var classroomDescriptionInput = document.getElementById('formContainer').children[5];

    classroomName = classroomNameInput.value;
    classroomDescription = classroomDescriptionInput.value;

    var classroomNameLength = classroomName.length;
    var classroomDescriptionLength = classroomDescription.length;

    var classroomNameError = document.getElementById('formContainer').children[3];
    var classroomDescriptionError = document.getElementById('formContainer').children[6];

    classroomNameError.textContent = '';
    classroomDescriptionError.textContent = '';

    var isNameValid = true;
    var isDescriptionValid = true;

    if (classroomNameLength < 5 || classroomNameLength > 15) {
        setInvalidInput(classroomNameInput, 'Class name must be between 5 and 15 characters.', classroomNameError);
        isNameValid = false;
    }

    if (classroomDescriptionLength < 10 || classroomDescriptionLength > 35) {
        setInvalidInput(classroomDescriptionInput, 'Class introduction must be between 10 and 35 characters.', classroomDescriptionError);
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
        const classesRef = ref(database, 'classes');
        const classQuery = query(child(classesRef, 'code'), equalTo(classroomCode));

        const snapshot = await get(classQuery);
        if (snapshot.exists()) {
            const classData = snapshot.val();
            console.log("Class name:", classData.name);
            console.log("Class description:", classData.description);
        } else {
            console.log("Data does not exist.");
        }
    }
}

// 在 creat_class 函数中检查数据是否存在，如果不存在则创建
async function creat_class() {
    if (validateCreate()) {
        const classesRef = ref(database, 'classes');
        const classQuery = query(child(classesRef, 'name'), equalTo(classroomName));

        const snapshot = await get(classQuery);
        if (snapshot.exists()) {
            const classData = snapshot.val();
            console.log("Class name:", classData.name);
            console.log("Class description:", classData.description);
        } else {
            // 生成随机的 7 位 16 进制字符
            const classroomCode = generateRandomCode();

            const newClassRef = push(classesRef);
            set(newClassRef, {
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