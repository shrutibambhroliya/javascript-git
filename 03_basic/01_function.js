// function and parameters

// console.log("s");
// console.log("h");
// console.log("r");
// console.log("u");
// console.log("t");
// console.log("i");

function newFun() {
  console.log("s");
  console.log("h");
  console.log("r");
  console.log("u");
  console.log("t");
  console.log("i");
}
newFun();

function abc(num1, num2) {
  console.log(num1 + num2);
}
abc(5, 8);

function alpha(x, y) {
  console.log(x + " " + y);
}
alpha("hello", "world");

function task(a1, a2) {
  let result = a1 + a2;
}
const task1 = task(1 + 2);
console.log(task1);

// return lakhu hoi to veriable ma function call thai
function fors(a3, a4) {
  let dep = a3 + a4;
  return dep;
}
const rep = fors(1, 2);
console.log(rep);

function demo(username = "shruti bambhroliya") {
  if (!username) {
    console.log("not username");
  }

  return `this is my username ${username}`;
}
console.log(demo());

// function with obect ,array

//1 spread function
function nubers(val1, val2, ...val3) {
  return val3;
}
console.log(nubers(100, 200, 300, 400, 500, 600));
// 2 object with function

const rummy = {
  name: "rinse",
  price: 222,
  username: "shruti",
};
function advice(other) {
  return `my username ${other.username} and price ${other.price}`;
}

// console.log(advice(rummy));
console.log(advice({ username: "shey" }));

// functiion with array

const cost = [100, 200, 300, 400, 500, 600];

function rupee(doller) {
  return doller[1];
}
// console.log(rupee(cost));
console.log(rupee([100, 200, 300]));
