const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const finalValue = document.getElementById('value');

let total = 0;
decrement.addEventListener('click', () => {
  total -= 1
  finalValue.textContent = total
})

increment.addEventListener('click', () => {
  total += 1;
  finalValue.textContent = total
})