const num1 = 8;
const num2 = 15;
console.log(`The sum of ${num1} and ${num2} is ${ num1 + num2}`);

const a = 30;
const b = 12;
console.log(`The sub of ${a} minus ${b} is ${a - b}`);

const x = 7;
const y = 3;
console.log(x * y); 

const dividend = 20;
const divisor = 4;
console.log(dividend / divisor);

const number1 = 15;
const number2 = 25;
const number3 = 10;
console.log('the Avg is: ',(number1 + number2 + number3) / 3);

const xx = 10;
console.log(xx % 3);

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

function isDivisibleBy5And7(number) {
    if (number % 5 === 0 && number % 7 === 0) {
        console.log(`${number} is divisible by both 5 and 7.`);
    } else {
        console.log(`${number} is not divisible by both 5 and 7.`);
    }
}

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        console.log(`${i} is divisible by 4`);
    }
}

function checkNumberBetween10And20(number) {
    if (number > 10 && number < 20) {
        console.log(`${number} is between 10 and 20.`);
    } else {
        console.log(`${number} is not between 10 and 20.`);
    }
}

function checkNumber(number) {
    if (number < -5 || number > 10) {
        console.log(`${number} is less than -5 or bigger than 10.`);
    } else {
        console.log(`${number} is less than 10 but bigger than -5.`);
    }
}

function printOppositeBoolean(value) {
    console.log(!value); 
}

function checkNumberConditions(number) {
    if ((number > 5 && number < 10) || (number > 20 && number < 30)) {
        console.log(`${number} is in [6,9] or in [21,29].`);
    } else {
        console.log(`${number} is not in the required range.`);
    }
}