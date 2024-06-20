// map
// map  function ma return value kare

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNums.map((item) => item + 10);
console.log(newNum);
// map chaining

const myNum = myNums
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item >= 51);
console.log(myNum);
