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

function user_page_update() {
    if (APP.login) {
        if (APP.account.$l == APP.account.$s) {
            document.getElementById("username").innerHTML = APP.account.username;
        } else {
            APP.get_from_server();
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    }
}

function login_b() {
    if (APP.login) window.location = "./account/";
    else window.location = "./account/login.html"
}