/*------------------------------------- Advanced Iteration Logic -------------------------------------*/
// Ex6.1 - Mumbling
function accum(str){
    if (typeof str !== 'string') {
        return("Input must be a string");
    }
    if (str.length === 0) return '';
    if (!/^[a-zA-Z]+$/.test(str)) {
        return("Input must only contain alphabetical characters");
    }
    return str.split('').map((char, index) => 
        char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');

}
console.log("------- Exe 6.1 -------");
console.log(accum(67));
console.log(accum(""));
console.log(accum("67"));
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// Exe 6.2 - Counting Duplicates
function countDuplicates(str) {
    if (typeof str !== 'string') {
        return("Input must be a string");
    }
    if (!/^[a-zA-Z0-9]+$/.test(str)) {
        return("Input must only contain alphabetical characters and numeric digits");
    }
    const lowerCaseStr = str.toLowerCase();
    const charHist = {};
    let duplicateCount = 0;
  
    for (let char of lowerCaseStr) {
        charHist[char] = (charHist[char] || 0) + 1;
    }
  
    for (let char in charHist) {
      if (charHist[char] > 1) {
        duplicateCount++;
      }
    }
    return duplicateCount;
}

console.log("------- Exe 6.2 -------");
console.log(countDuplicates(7));
console.log(countDuplicates("ghji9-"));
console.log(countDuplicates("abcde"));
console.log(countDuplicates("aabbcde"));
console.log(countDuplicates("indivisibility"));
console.log(countDuplicates("aA11"));

// Exe 6.3 - organize strings
function longest(str1, str2){
    if (typeof str1 !== 'string' || typeof str2 !== 'string' ) {
        return("Both Inputs must be strings");
    }
    if (!/^[a-z]+$/.test(str1) || !/^[a-z]+$/.test(str2)) {
        return("Input must only contain alphabetical characters and numeric digits");
    }
    const distinct = Array.from(new Set(str1 + str2));
    return distinct.sort().join('');
}

console.log("------- Exe 6.3 -------");
console.log(longest(6));
console.log(longest(6,"6"));
console.log(longest("yes","yes4"));
console.log(longest("yes","yEs4"));
console.log(longest("yes","yes"));
console.log(longest("abcdefghijklimnopqrstuvwxyz","abcdefghijklimnopqrstuvwxyz"));
console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));

// Exe 6.4 - isogram
function islsogram(str){
    if (typeof str !== 'string') {
        return("Input must be a string");
    }
    if (!/^[a-zA-Z]+$/.test(str)) {
        return("Input must only contain alphabetical characters");
    }
    const lowerStr = str.toLowerCase();
    const charSet = new Set();
    for (const char of lowerStr) {
        if (charSet.has(char)) {
            return false; 
        }
        charSet.add(char);
    }
    return true;
}

console.log("------- Exe 6.4 -------");
console.log(islsogram(55));
console.log(islsogram("yes4"));
console.log(islsogram("Dermatoglyphics"));
console.log(islsogram("aba"));
console.log(islsogram("moOse"));

/*------------------------------------- Implement Functionality -------------------------------------*/
// Exe 7 

function Filter(arr, callback){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log("------- Exe 7  Filter -------");
console.log(Filter([1,2,3,4,5,6],num => num % 2 === 1));

function Mapp(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

console.log("------- Exe 7  Map -------");
console.log(Mapp([1,2,3,4,5,6],num => num * 2))

function ForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

console.log("------- Exe 7  ForEach -------");
ForEach([1,2,3,4,5,6],num => console.log(num));


// Exe 8 - Find the Perimeter of a Rectangle
function findPerimeter(length , width){
    if(typeof length !== 'number' || typeof width !== 'number' || length < 1 || width < 1){
        return ("Inputs must be positive numbers");
    }
    return 2 * (length + width);
}

console.log("------- Exe 8 -------");
console.log(findPerimeter(-5,6));
console.log(findPerimeter(6, 7)); 
console.log(findPerimeter(20, 10)); 
console.log(findPerimeter(2, 9)); 

