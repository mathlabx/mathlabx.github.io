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
    setItem: (partition, key, data) => {
        const dataRef = database.ref(`${partition}/${key}`);
        return dataRef.set(data); 
    },

    
    getItem: async (partition, key) => {
        const dataRef = database.ref(`${partition}/${key}`);
        const snapshot = await dataRef.get(); 
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    },

    
    removeItem: (partition, key) => {
        const dataRef = database.ref(`${partition}/${key}`);
        return dataRef.remove(); 
    },

    
    clearPartition: (partition) => {
        console.error("Firebase Realtime Database does not support clearing a partition.");
    },
};
alert("包括文件");

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