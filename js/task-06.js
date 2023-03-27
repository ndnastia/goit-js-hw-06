const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute('data-length');
console.log(inputLength);
input.addEventListener('blur', (evt) => evt.currentTarget.value.length === Number(inputLength)
    ? input.classList.add("valid")
    : input.classList.add("invalid"));

