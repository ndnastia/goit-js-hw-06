const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counter = 0;
decrement.addEventListener('click', dec);
function dec() {
    counter += Number(decrement.textContent);
    value.textContent = String(counter);
}


increment.addEventListener("click", inc);
function inc() {
  counter += Number(increment.textContent);
  value.textContent = String(counter);
}

