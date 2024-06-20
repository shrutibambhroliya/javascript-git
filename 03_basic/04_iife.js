// IIFE ="immidiately invoked function expression"

// iife use :globle scope polution remove

// name iife
(function hiii(num1, num2) {
  console.log(num1 + num2);
})(1, 5);

// iife normal

((word) => {
  console.log(`my name is ${word}`);
})("shruti");
