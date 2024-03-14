let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

const toggleIcon = () => {
    if (password.type == "password") {
        password.type = "text"
        eyeIcon.src = "media/eye-open.png"
    } else {
        password.type = "password";
        eyeIcon.src = "media/eye-close.png";
    }
}