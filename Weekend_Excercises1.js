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
      return("Input must be positive integers");
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



/*------------------------------------- Basic Iteration Logic -------------------------------------*/


/*------------------------------------- Advanced Iteration Logic -------------------------------------*/


/*------------------------------------- Implement Functionality -------------------------------------*/
