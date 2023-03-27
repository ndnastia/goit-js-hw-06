const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const documentColor = document.body;

const changeColor = () => 
  span.textContent = documentColor.style.backgroundColor = getRandomHexColor();



button.addEventListener("click", changeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}