const test1 = "abcdef";
const test2 = 123;
const test3 = true;
const test4 = {};
const test5 = [];
let test6;
const test7 = {"abcdef": 123};
const test8 = ["abcdef", 123];
function test9(){return "abcdef"};
console.log(typeof test1); //evaluates as string type
console.log(typeof test2); //evaluates as number type
console.log(typeof test3); //evaluates as boolean type
console.log(typeof test4); //evaluates as object type 
console.log(typeof test5); //evaluates as object type
console.log(typeof test6); //evaluates as undefined
console.log(typeof test7); //evaluates as object type
console.log(typeof test8); //evaluates as object type
console.log(typeof test9); //evaluates as function 

const test10 = null;
console.log('"null" value is type: '+ typeof test10); //evaluates as object type