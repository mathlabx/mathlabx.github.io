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



function login() {
    var userinput_email = document.getElementById("l_email").value;
    var userinput_password = document.getElementById("l_password").value;
    let server_user = new Object();
    serverStorage.getItem("User", userinput_email).then((data) => {
        server_user = data;
    });
    if (server_user.Password == userinput_password) {
        localStorage.setItem("login", "true");
        localStorage.setItem("key", server_user.Key)
        APP.get_from_server();
        window.location = "../";
    }
}

function registered() {
    var userinput_email = document.getElementById("r_email").value;
    var userinput_name = document.getElementById("r_username").value;
    var userinput_password = document.getElementById("r_password").value;
    // 使用示例
    const userData = {
        Name: userinput_name,
        Email: userinput_email,
        Password: userinput_password,
        Key: Date.parse(new Date())
    };

    serverStorage.setItem("User", userinput_email, userData); 
}