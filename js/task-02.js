const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const markup = ingredients.map(item => {
  const li = document.createElement(`li`);
  const p = document.createElement(`p`);
  p.textContent = item;
  li.classList.add('item');
  li.append(p);
  return li;
})

list.append(...markup);
console.log(markup);