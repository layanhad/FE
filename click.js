const clickButton = document.getElementById('clickButton');
const counter = document.getElementById('counter');
let count = 0;

clickButton.addEventListener('click', function() {
    count++;
    counter.textContent = count;
});

const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
    count = 0;
    counter.textContent = count;
});