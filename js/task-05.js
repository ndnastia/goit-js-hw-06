const input = document.querySelector("#name-input");
const span = document.querySelector('#name-output');
let inputName = "Anonymous";
input.addEventListener("input", (event) => {
    inputName = event.currentTarget.value;
    span.textContent = inputName === '' ? "Anonymous" : inputName;
  
});