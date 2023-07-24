const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`)

const li = ingredients.map((ingredients) => {
  const item = document.createElement(`li`);
  item.classList.add('item');
  item.textContent = ingredients;
  return item;
})

list.append(...li)
console.log(li)