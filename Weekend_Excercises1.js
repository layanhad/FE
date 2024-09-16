/*------------------------------------- Basic -------------------------------------*/
// Exe 1.1  - Yes or No
function boolToWord(bool) {
    if (typeof bool !== 'boolean') {
        return("Input must be a boolean");
    }
    return bool ? "Yes" : "No";
}

console.log("------- Exe 1.1 -------");
console.log(boolToWord(true));
console.log(boolToWord(false));
console.log(boolToWord("yes"));

/*------------------------------------- Simple Math -------------------------------------*/
// Exe 2.1 - Sum of lowest numbers
function sumTwoSmallestNumbers(numbers) {
    if (!Array.isArray(numbers)){
        return ("Input must be an array");
    }
    if (!numbers.every((num) => Number.isInteger(num))) {
        return ("Input must be an array of Integers");
    }
    if(numbers.length < 4){
        return ("Array must contain at least 4 numbers");
    }
    const positiveNumbers = numbers.filter(n => n > 0);
    if (positiveNumbers.length < 4) {
      return ('Array must contain at least 4 positive numbers');
    }
    const sorted = positiveNumbers.sort((a, b) => a - b);
    return sorted[0] + sorted[1];
  }

console.log("------- Exe 2.1 -------");
console.log(sumTwoSmallestNumbers(2));
console.log(sumTwoSmallestNumbers(["yes",2,3]));
console.log(sumTwoSmallestNumbers([1,2,3]));
console.log(sumTwoSmallestNumbers([-1,2,3,4]));
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

// Exe 2.2 - One and Zero - Binary
function binarytoNumber(arr){
    if (!Array.isArray(arr)){
        return ("Input must be an array");
    }
    if (!arr.every((num) => (Number.isInteger(num)) && (num === 0 || num === 1))) {
        return ("Input must be an array of 0s and 1s");
    }
    return parseInt(arr.join(''), 2);
}

console.log("------- Exe 2.2 -------");
console.log(binarytoNumber((1,2)));
console.log(binarytoNumber( [0, 0, 2, 1] ));
console.log(binarytoNumber( [0, 0, 0, 1] ));
console.log(binarytoNumber( [1, 0, 0, 1] ));
console.log(binarytoNumber( [1, 0, 1, 1] ));

// Exe 2.3 - Find the Next Perfect Square
function findNextSquare(number){
    if(!Number.isInteger(number)){
        return ("Input must be a Integer");
    }
    const sqrt = Math.sqrt(number);
    if(!Number.isInteger(sqrt)){
        return -1;
    }
    return Math.pow(sqrt + 1, 2);
}

console.log("------- Exe 2.3 -------");
console.log(findNextSquare(15.5));
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

// Exe 2.4 - Unique
function findUniq(arr){
    if (!Array.isArray(arr)){
        return ("Input must be an array");
    }
    if (!arr.every((num) => (typeof (num) === "number"))) {
        return ("Input must be an array of numbes");
    }
    if(arr.length < 3){
        return ("Input must be an array of at least 3 numbes");
    }
    const uniqueNumbers = new Set(arr);
    if(uniqueNumbers.size !== 2 ){
        return ("Input must be an array that consists of 2 numbers");
    }
    const uniqueArray = [...uniqueNumbers];
    const count1 = arr.filter(num => num === uniqueArray[0]).length;
    const count2 = arr.filter(num => num === uniqueArray[1]).length;
    if(count1 > 1 && count2 > 1){
        return ("Input must be an array of all equal numbers except one");
    }
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log("------- Exe 2.4 -------");
console.log(findUniq(1));
console.log(findUniq([1,2]));
console.log(findUniq([1,1,1]));
console.log(findUniq([1,1,1,2,1,2]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));

// Exe 2.5 - Summation
function summtion(number){
    if(typeof number !== "number" || number < 1){
        return "Input must be a positive number";
    }
    sum = 0;
    for (let i=1 ;i<= number; i++){
        sum += i;
    }
    return sum;
}

console.log("------- Exe 2.5 -------");
console.log(summtion(-1));
console.log(summtion(2));
console.log(summtion(8));

// Exe 2.6 - Years and Centuries
function centuryFromYear(year){
    if (typeof year !== 'number' || year < 1 || !Number.isInteger(year)) {
        return ("Input must be a positive Integer");
    }
    return Math.ceil(year / 100);
}

console.log("------- Exe 2.6 -------");
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));

// Exe 2.7 - Basic Math
function basicOp (operation, value1, value2) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return ("Both values must be numbers");
    }
    if(typeof operation !== 'string'){
        return ("Operation must be a string");
    }
    switch(operation) {
      case '+': return value1 + value2;
      case '-': return value1 - value2;
      case '*': return value1 * value2;
      case '/': 
        if (value2 === 0) return('Division by zero');
        else return value1 / value2;
      default: return('Invalid operation');
    }
  }

console.log("------- Exe 2.7 -------");
console.log(basicOp('+', '-', 7));
console.log(basicOp('++', 4, 7));
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 0));
console.log(basicOp('/', 49, 7));

/*------------------------------------- Math In Story -------------------------------------*/
// Exe 3.1 - Growth Of population
function nb_year (p0, percent, aug, p) {
    if (typeof p0 !== 'number' || typeof percent !== 'number' || typeof aug !== 'number' || typeof p !== 'number' ||
        p0 < 0 || percent < 0 || p < p0) {
      return("Input must be non-negative integers");
    }
    let years = 0;
    let currentPopulation = p0;
    while (currentPopulation < p) {
      currentPopulation = Math.floor(currentPopulation + currentPopulation * percent / 100 + aug);
      years++;
      if (years > 1000) return("Population growth exceeded 1000 years");
    }
    return years;
  };

console.log("------- Exe 3.1 -------");
console.log(nb_year(1500, "5", 100, 5000));
console.log(nb_year(1500, 5, -1, 5000));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));

// Exe 3.2 - People on the Bus
function peopleOnBus(busStops){
    if (!Array.isArray(busStops) || busStops.some(stop => !Array.isArray(stop) || stop.length !== 2)) {
        return("Input must be an array of arrays, each containing 2 numbers");
    }
    let peopleOnBus = 0;

    for (let i = 0; i < busStops.length; i++) {
        const peopleIn = busStops[i][0]; 
        const peopleOut = busStops[i][1]; 

        if (peopleIn - peopleOut < 0) {
            return(`Invalid data at stop ${i}: [${peopleIn}, ${peopleOut}] the number of people out should be less than the people on the bus`);
        }

        peopleOnBus += peopleIn - peopleOut;
    }

    return peopleOnBus;
      
}

console.log("------- Exe 3.2 -------");
console.log(peopleOnBus(1));
console.log(peopleOnBus([1,2,3]));
console.log(peopleOnBus([[1,2],[3]]));
console.log(peopleOnBus([[1,2],[1,3]]));
console.log(peopleOnBus([[2,2],[5,3],[7,4]]));


/*------------------------------------- Advanced Math -------------------------------------*/
// Exe 4.1 - Fibonacci
function fibonacci (number){
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
      return("Input must be a non-negative integer");
    }
    if (number === 0) return 0;
    if (number === 1) return 1;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= number; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
  
console.log("------- Exe 4.1 -------");
console.log(fibonacci("yes"));
console.log(fibonacci(-5));
console.log(fibonacci(2));
console.log(fibonacci(6));


// Exe 4.2 - Tribonacci
function tribonacci (signature, n) {
    if (!Array.isArray(signature) || signature.length !== 3 || 
        signature.some(num => typeof num !== 'number' || num < 0)) {
      return('Signature must be an array of 3 non-negative numbers');
    }
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      return('n must be a positive integer');
    }
    if (n === 0) return [];
    if (n <= 3) return signature.slice(0, n);
    const result = signature.slice();
    for (let i = 3; i < n; i++) {
        const nextElement = result[i - 1] + result[i - 2] + result[i - 3];
        result.push(nextElement);
    }

    return result;
}

console.log("------- Exe 4.2 -------");
console.log(tribonacci([1, 2, 3], 0));
console.log(tribonacci([0, 1, 1,4], 5));
console.log(tribonacci([1, -2, 3], 2));
console.log(tribonacci( [1, 1, 1], 5));
console.log(tribonacci( [1, 1, 1], 8));

/*------------------------------------- Basic Iteration Logic -------------------------------------*/
// Exe 5.1 - trimming string
function trimingString (str){
    if (typeof str !== 'string' || str.length < 3) {
      return ("Input must be a string with at least 3 characters");
    }
    return str.slice(1, -1);
  }

console.log("------- Exe 5.1 -------");
console.log(trimingString(7));
console.log(trimingString("ye"));
console.log(trimingString("yes"));
console.log(trimingString("hello word"));


// Exe 5.2 - String Repeat
function repeatStr(n, str){
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return ("n must be a non-negative integer");
    }
    if (typeof str !== 'string') {
        return("str must be a string");
    }
    return str.repeat(n);
}

console.log("------- Exe 5.2 -------");
console.log(repeatStr(-8, "I"));
console.log(repeatStr(6, 6));
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));

// Exe 5.3 - To Camel Case
function toCamelCase(str){
    if (typeof str !== 'string') {
        return("Input must be a string");
    }
      
    if (!/^[a-zA-Z]+([_-][a-zA-Z]+)*$/.test(str)) {
        return("Input must be words separated by dashes or underscores");
    }
      
    return str.replace(/[-_](.)/g, (_, character) => character.toUpperCase());
}

console.log("------- Exe 5.3 -------");
console.log(toCamelCase("The--Stealth_Warrior"));
console.log(toCamelCase("The/Stealth_Warrior"));
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

// Exe 5.4 - To Weird Case


console.log("------- Exe 5.4 -------");


// Exe 5.5 - Abbreviate two words

console.log("------- Exe 5.5 -------");

/*------------------------------------- Advanced Iteration Logic -------------------------------------*/


/*------------------------------------- Implement Functionality -------------------------------------*/
