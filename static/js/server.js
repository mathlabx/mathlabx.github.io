// Firebase 配置信息
const firebaseConfig = {
    apiKey: "AIzaSyDGdWiX7d8UsC5E09SjvuQJUK24JnZWQKc",
    authDomain: "mathscichem.firebaseapp.com",
    projectId: "mathscichem",
    storageBucket: "mathscichem.appspot.com",
    messagingSenderId: "940472383958",
    appId: "1:940472383958:web:d719c40cfd6fbbca608c77",
    measurementId: "G-J8HMB7NHEE",
};

// 初始化 Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

// 封装适应 JSON 数据的存储和检索函数
const serverStorage = {
    // 存储 JSON 数据到指定分区
    setItem: (partition, key, data) => {
        const dataRef = database.ref(`${partition}/${key}`);
        return dataRef.set(data); // 修复此处的 value 为 data
    },

    // 获取 JSON 数据从指定分区
    getItem: async (partition, key) => {
        const dataRef = database.ref(`${partition}/${key}`);
        const snapshot = await dataRef.get(); // 使用 dataRef.get() 获取快照

        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    },

    // 删除 JSON 数据从指定分区
    removeItem: (partition, key) => {
        const dataRef = database.ref(`${partition}/${key}`);
        return dataRef.remove(); // 删除数据
    },

    // 清空指定分区的数据（慎用）
    clearPartition: (partition) => {
        console.error("Firebase Realtime Database does not support clearing a partition.");
    },
};

/*

使用实例

setTimeout(() => {
    // 使用示例
    const userData = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        age: 30,
    };

    serverStorage.setItem("A", "user-profile", userData); // 存储 JSON 数据到分区 "A"
    serverStorage.setItem("B", "user-profile", userData); // 存储 JSON 数据到分区 "B"

    // 获取 JSON 数据从分区 "A"
    serverStorage.getItem("A", "user-profile").then((data) => {
        console.log("User Profile from Partition A:", data);
    });

    // 获取 JSON 数据从分区 "B"
    serverStorage.getItem("B", "user-profile").then((data) => {
        console.log("User Profile from Partition B:", data);
    });
}, 3000);

*/