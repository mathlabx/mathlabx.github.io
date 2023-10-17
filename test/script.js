function receiveObject() {
    const jsonStr = sessionStorage.getItem('MPCTest'); // 获取存储在 sessionStorage 中的数据

    if (jsonStr) {
        const data = JSON.parse(jsonStr); // 将 JSON 字符串转换为对象
        sessionStorage.removeItem('MPCTest'); // 获取数据后清空 sessionStorage 中的数据
        console.log(data);
        return data;
    } else {
        window.location = "../404.html";
        return {}; // 如果没有有效的数据，返回空对象
    }
}

let Test = {
    Test_Taker: {
        UID: null,
        CID: null
    },
    Questions: [],
    Test_Time: null,
    Used_Time: null,
    Set_Up: function () {

    }
}

window.addEventListener("load", function () {
    receiveObject();
});