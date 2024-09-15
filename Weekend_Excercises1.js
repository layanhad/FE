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

/*------------------------------------- Math In Story -------------------------------------*/


/*------------------------------------- Advanced Math -------------------------------------*/


/*------------------------------------- Basic Iteration Logic -------------------------------------*/


/*------------------------------------- Advanced Iteration Logic -------------------------------------*/


/*------------------------------------- Implement Functionality -------------------------------------*/
