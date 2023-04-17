const rangeInput = document.getElementById('font-size-control');
const textToChange = document.getElementById('text');
rangeInput.addEventListener('input', onRangeChange);
function onRangeChange(event) {
  textToChange.style.fontSize = `${event.currentTarget.value}px`;
}
