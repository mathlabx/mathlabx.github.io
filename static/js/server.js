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

/// 初始化 Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore(); // 更改这一行以使用 Cloud Firestore

// 封装适应 JSON 数据的存储和检索函数
const serverStorage = {
    setItem: (partition, key, data) => {
        return firestore.collection(partition).doc(key).set(data);
    },

    getItem: async (partition, key) => {
        const docRef = await firestore.collection(partition).doc(key).get();
        if (docRef.exists) {
            return docRef.data();
        } else {
            return null;
        }
    },

    removeItem: (partition, key) => {
        return firestore.collection(partition).doc(key).delete();
    },

    clearPartition: (partition) => {
        console.error("Cloud Firestore does not support clearing a partition.");
    },
};

// 验证当前用户状态
function checkCurrentUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // 用户已登录
            console.log("当前用户已登录:", user);
            // 在这里可以添加代码，处理已登录用户的操作
        } else {
            // 用户未登录
            console.log("当前用户未登录");
            localStorage.clear();
            // 在这里可以添加代码，处理未登录用户的操作
        }
    });
}

/*

使用实例

setTimeout(() => {
    // 使用示例
    const userData = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        age: 30,
    };

    serverStorage.setItem("users", "user-profile", userData); // 存储 JSON 数据到集合 "users" 中
    serverStorage.setItem("users", "user-profile", userData); // 存储 JSON 数据到集合 "users" 中

    // 获取 JSON 数据从集合 "users" 中
    serverStorage.getItem("users", "user-profile").then((data) => {
        console.log("User Profile from Collection 'users':", data);
    });

    // 删除 JSON 数据从集合 "users" 中
    serverStorage.removeItem("users", "user-profile");

}, 3000);

*/