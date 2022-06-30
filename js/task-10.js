function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const inputNumbers = document.querySelector('#controls > input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

boxes.style = `display: flex; flex-wrap: wrap;`;

function createBoxes(amount) {
  const arr = [];
  let divSize = 20;

  for (let i = 0; i < amount; i++) {
    divSize += 10;

    // arr.push(`<div style="background-color: ${getRandomHexColor()}; width: ${divSize + 'px'}; height: ${divSize + 'px'};"></div>`);

    let div = document.createElement('div');
    div.classList.add('item');
    div.textContent = i + 1;
    div.style = `background-color: ${getRandomHexColor()}; width: ${divSize + 'px'}; height: ${divSize + 'px'}; display: flex; align-items: center; justify-content: center; font-size: ${divSize - 23 + 'px'};`
    arr.push(div);
  }
  // boxes.insertAdjacentHTML('afterbegin', arr.join(''));
  boxes.append(...arr);
}

btnCreate.addEventListener('click', (e) => {
  createBoxes(inputNumbers.value)
});


btnDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
})
