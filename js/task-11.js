const cities = [
  'Kharkiv',
  'Kiev',
  ['Borispol', 'Irpin'],
  'Odessa',
  'Lviv',
  'Dnieper',
];
const body = document.querySelector('body');

const renderItems = (arr) => {
  const list = arr.map((el) => {
    if (Array.isArray(el)) {
      return renderItems(el);
    }
    return `<li>${el}</li>`;
  });
  return `<ul>${list.join('')}</ul>`;
};
renderItems(cities);
document.body.innerHTML = renderItems(cities);

// function addNewItem(element, arr) {
//   arr.forEach((item) => {
//     let li = document.createElement('li');
//     element.append(li);

//     if (typeof item === 'object') {
//       let ul = document.createElement('ul');
//       li.append(ul);
//       for (let i = 0; i < item.length; i++) {
//         let secondli = document.createElement('li');
//         ul.append(secondli);
//         secondli.textContent = item[i];
//       }
//     } else {
//       li.textContent = item;
//     }
//   });
// }
// let list = document.createElement('ul');
// body.append(list);
// addNewItem(list, cities);
