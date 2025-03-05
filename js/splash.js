window.onload = function () {
    setTimeout(() => {
        document.querySelector(".splash-screen").classList.add("hidden");
        setTimeout(() => {
            window.location.href = "login.html"; // Redirect to Login Page
        }, 500);
    }, 2000);
};
