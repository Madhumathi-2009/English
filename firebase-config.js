import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA4UkmkWabLP__UJuo_TxX4FaukPZdnZe4",
    authDomain: "note-hub-19d3a.firebaseapp.com",
    databaseURL: "https://note-hub-19d3a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "note-hub-19d3a",
    storageBucket: "note-hub-19d3a.firebasestorage.app",
    messagingSenderId: "234287338295",
    appId: "1:234287338295:web:50726d5663afc96e0140b2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };