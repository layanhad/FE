// 1. Sum of Natural Numbers
    function sumOfNaturalNumbers(number) {
        if (number === 0) {
            return 0;
        }
        return number + sumOfNaturalNumbers(number - 1);
    }

// 2. Reverse a String
    function reverseString(str) {
        if (str === "") {
            return "";
        }
        return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
    }

// 3. Count Down
    function countDown(n){
        if (n === 0) {
            return;
        }
        console.log(n);
        countDown(n-1);
    }

// 4. Print an Array
    function printArray(arr) {
        if (arr.length === 0) return;
        console.log(arr[0]);
        printArray(arr.slice(1));
    }

    printArray([1,2,3])