const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute('data-length');
console.log(inputLength);
input.addEventListener('blur', onCheck);

function onCheck(evt) {
    if (evt.currentTarget.value.length === Number(inputLength)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
 }
}