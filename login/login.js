const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox.addEventListener('change', () => {
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});

let btnclick = document.getElementById('register');

btnclick.addEventListener("click", () => {
    window.location.href = "/register/register.html"
})

let forgotBtn  = document.getElementById('forgot')

forgotBtn.addEventListener("click"), () => {
    window.location.href = "/forgot/forgot.html"
}