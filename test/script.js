function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function receiveObject() {
    const jsonStr = sessionStorage.getItem('MPCTest'); // 获取存储在 sessionStorage 中的数据

    if (jsonStr) {
        const data = JSON.parse(jsonStr); // 将 JSON 字符串转换为对象
        sessionStorage.removeItem('MPCTest'); // 获取数据后清空 sessionStorage 中的数据
        return data;
    } else {
        return {}; // 如果没有有效的数据，返回空对象
    }
}

let Test = {
    Test_Taker: {
        UID: null,
        CID: null
    },
    Questions: null,
    Test_Time: null,
    Used_Time: null
}

// Example Fullscreen API implementation
document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
        // User attempted to exit fullscreen, trigger appropriate action
        console.log("已退出全屏！");
        alert("Exiting full-screen will end the exam.");
        // Add your code to handle exam ending here
    }
});
