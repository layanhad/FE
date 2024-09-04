// Step 1: Declare variables with specific values
const num = 10;
const str = "Hello";
const bool = true;
console.log(`The type of num is ${typeof num}`);  
console.log(`The type of str is ${typeof str}`);
console.log(`The type of bool is ${typeof bool}`);

const firstVar = 42;   
const secondVar = "42";  
console.log(`Are the types of firstVar and secondVar the same? ${typeof firstVar === typeof secondVar}`);

const noValue = undefined;
const emptyValue = null;
console.log(`The type of noValue is ${typeof noValue}`);         // undefined
console.log(`The type of emptyValue is ${typeof emptyValue}`);   // object (null is of type object in JavaScript)

const numVar = 18;
const strVar = "Java";
const boolVar = true;
console.log(`The value of numVar is ${numVar} and its type is ${typeof numVar}`);   // 25, number
console.log(`The value of strVar is "${strVar}" and its type is ${typeof strVar}`); // "JavaScript", string
console.log(`The value of boolVar is ${boolVar} and its type is ${typeof boolVar}`); // false, boolean
