
let savedPassword = localStorage.getItem("tsv1-password") || "test";

function login() {
    const password = document.getElementById("password").value;
    if (password === savedPassword) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-msg").innerText = "Incorrect password.";
    }
}
