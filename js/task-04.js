const btnDecrement = document.querySelector('button[data-action="decrement"]'),
  btnIncrement = document.querySelector('button[data-action="increment"]'),
  counterValue = document.querySelector('#value');
counterValue.textContent = 0;

btnIncrement.addEventListener('click', () => {
  counterValue.textContent++;
});

btnDecrement.addEventListener('click', () => {
  counterValue.textContent--;
});
