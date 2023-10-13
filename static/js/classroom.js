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
const receivedClassID = receiveObject();
console.log(receivedObj);
