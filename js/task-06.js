const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');
const checkInputValueLength = (event) => {
    const currentValue = event.currentTarget.value 
    if (Number(dataLength) === Number(currentValue.length)) {
        inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")
    } else {
        inputEl.classList.add("invalid")
        inputEl.classList.remove("valid")
    }
}

inputEl.addEventListener("blur", checkInputValueLength)
