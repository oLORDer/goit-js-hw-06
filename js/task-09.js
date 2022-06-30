function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('button.change-color');
const resultColor = document.querySelector('span.color');

btnChangeColor.addEventListener('click', (event) => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  resultColor.textContent = randomColor;
})

