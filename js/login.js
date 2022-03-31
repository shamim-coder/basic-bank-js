const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
    const passwordField = loginBtn.previousElementSibling;
    const emailField = passwordField.previousElementSibling;
    if (
        emailField.value == "wpshamim@gmail.com" &&
        passwordField.value == "12345"
    ) {
        window.location.href = "/banking.html";
    } else {
        passwordField.style.border = "1px solid red";
        emailField.style.border = "1px solid red";
    }
});
