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



/*------------------------------------- Implement Functionality -------------------------------------*/








