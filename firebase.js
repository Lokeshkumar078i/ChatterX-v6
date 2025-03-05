import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAQT17NeOH6dB3mgXriaWwQIR-vPOvIU28",
    authDomain: "chatterx-v5.firebaseapp.com",
    projectId: "chatterx-v5",
    storageBucket: "chatterx-v5.firebasestorage.app",
    messagingSenderId: "954568972116",
    appId: "1:954568972116:web:21c0b1e71e3c4390251ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };