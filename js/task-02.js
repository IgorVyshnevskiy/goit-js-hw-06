const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const UlElement = document.getElementById('ingredients')

for (const ingredient of ingredients) {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item')
  UlElement.prepend(liElement);
}

// console.log(UlElement);



