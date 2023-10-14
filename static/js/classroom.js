function receiveObject() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const obj = {};
    for (let [key, value] of urlParams) {
        obj[key] = value;
    }
    return obj;
}

// 接收对象
const receivedClass = receiveObject();
console.log(receivedClass);

function click_todo() {
    
}

function click_people() {
    
}

function click_setting() {
    
}