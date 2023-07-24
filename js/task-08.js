const formLogin = document.querySelector('.login-form')
formLogin.addEventListener('submit', handlerSubmit)
function handlerSubmit (event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements
    if(!email.value || !password.value) {
        const message = 'всі поля мають бути заповнені';
        alert(message)
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
    }
    formLogin.reset()
}