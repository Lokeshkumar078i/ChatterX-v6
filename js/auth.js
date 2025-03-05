import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase Config
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

// Handle Login
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "home.html"; // Redirect to Home Page
        })
        .catch((error) => {
            alert("Login Failed: " + error.message);
        });
});

// Handle Register
document.getElementById("register-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account Created!");
            window.location.href = "login.html"; // Redirect to Login Page
        })
        .catch((error) => {
            alert("Sign Up Failed: " + error.message);
        });
});