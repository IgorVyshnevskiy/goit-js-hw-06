const input = document.getElementById('name-input')
const span = document.getElementById('name-output')

input.addEventListener("input", onInputChange);
function onInputChange(event) {
  const inputValue = event.target.value.trim();
  span.textContent = inputValue ? inputValue : "Anonymous";}