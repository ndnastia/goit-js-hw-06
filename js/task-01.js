const categories = document.querySelectorAll("#categories li.item");
const categoriesCount = categories.length;
console.dir(`Number of categories: ${categoriesCount}`);

categories.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
})