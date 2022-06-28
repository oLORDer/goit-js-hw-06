const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

function addNewItem(element, arr) {
  arr.forEach((item) => {
    let li = document.createElement('li');
    li.classList.add('item');
    li.textContent = item;
    element.append(li);
  });
}

addNewItem(ingredientsList, ingredients);
