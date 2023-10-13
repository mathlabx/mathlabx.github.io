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

function toggleForm() {
    var formContainer = document.getElementById('formContainer');

    if (!formContainer) {
        openForm();
        return;
    }

    isFormOpen = !isFormOpen;
}

function openForm() {
    var formContainer = document.createElement('div');
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
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';
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
    createButton.style.backgroundColor = '#4CAF50';
    createButton.style.color = 'white';
    createButton.style.border = 'none';
    createButton.style.borderRadius = '4px';
    createButton.style.cursor = 'pointer';
    createButton.textContent = 'Create';
    createButton.onclick = validateCreate;
    formContainer.appendChild(createButton);

    document.body.appendChild(formContainer);

    toggleForm();
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

function validateJoin() {
    var classroomCodeInput = document.getElementById('formContainer').children[0];
    var classroomCode = classroomCodeInput.value;

    var classroomCodeRegex = /^[0-9A-Fa-f]{7}$/;
    var classroomCodeError = document.getElementById('formContainer').children[1];

    classroomCodeError.textContent = '';

    if (!classroomCodeRegex.test(classroomCode)) {
        setInvalidInput(classroomCodeInput, 'Class code must be 7 hexadecimal characters.', classroomCodeError);
        return false;
    }

    return true;
}

function validateCreate() {
    var classroomNameInput = document.getElementById('formContainer').children[2];
    var classroomDescriptionInput = document.getElementById('formContainer').children[5];

    var classroomName = classroomNameInput.value;
    var classroomDescription = classroomDescriptionInput.value;

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

window.addEventListener("load", function () {
    if (!APP.login) window.location = "../account/login.html";
    setTimeout(() => {
        serverStorage.getItem("User", APP.account.UID).then((data) => {
            if (data) {
                APP.class = data.Class;
                document.getElementById("join_button").onclick = openForm();
                class_update();
            }
        });
    }, 300);
})