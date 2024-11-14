console.log('Hello!');

const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let currentCount = Number(countDisplay.innerText);

function incrementHandler() {
  currentCount++;
  countDisplay.innerText = currentCount;
}

function decrementHandler() {
  if (currentCount > 0) {
    currentCount--;
    countDisplay.innerText = currentCount;
  }
}

function resetHandler() {
  currentCount = 0;
  countDisplay.innerText = currentCount;
}

incrementButton.addEventListener('click', incrementHandler);
decrementButton.addEventListener('click', decrementHandler);
resetButton.addEventListener('click', resetHandler);
