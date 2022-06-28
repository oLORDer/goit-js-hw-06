const categoriesNumber = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesNumber.length);

categoriesNumber.forEach((item) => {
  const categoryTitle = item.querySelector('h2');
  console.log('Category: ', categoryTitle.textContent);
  const listsNumber = item.querySelectorAll('ul > li');
  console.log('Elements: ', listsNumber.length);
});
