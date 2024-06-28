//********* */ primitive datatype*****************
// string,number,boolean,null,undefined,symbol,bigInt;

const value = "hello";
const value1 = 22;
const value2 = true;
const value3 = null;
let value4;

const abc = Symbol(123);
const xyz = Symbol(123);
// console.log(abc === xyz);
// console.log(typeof abc);

const vipNumb = 12345678998745612345645n;
// console.log(typeof vipNumb);

//******************/ Refrences Non-primitive datatypes*******************
// Array,Object,Function

const self = ["animal", "women", "men"];
// console.log(typeof self);

let mySelf = {
  name: "shruti",
  age: 22,
};
// console.log(typeof mySelf);

const myFunctio = function () {
  // console.log("namaste world");
};
// console.log(typeof myFunctio);

/*****************************MEMORY******************************/
// Two type memory :stack , heap;
// stack:primitive value,value copy kare
// heap:non-primitive value,object or array ni orignal/refrense value male

let ifscCode = "bambhroliya";
let accountNum = ifscCode;
accountNum = "satasiya";

console.log(accountNum);
console.log(ifscCode);

let other = {
  name: "shruti",
  email: "shrutibambhroliya@gmail.com",
};
let main = other;
console.log(main);

main.email = "darshikbambhroliya.gmail.com";
console.log(main.email);
console.log(other.email);
