const a = 10;
var b = 20;
let c = 30;
if (true) {
  const a = 50;
  b = 50;
  let c = 60;
}
console.log(a);
console.log(b);
console.log(c);

function one() {
  const username = "shruti";
  function two() {
    const platform = "youtube";
    console.log(username);
  }
  //   console.log(platform);
  two();
  console.log("hello");
}
one();

if (true) {
  const username = "darshik";

  if (username === "darshik") {
    const website = "youtube";
    console.log(username + website);
  }
  //   console.log(website);
}

// function type

console.log(first(5));
function first(num1) {
  return num1;
}
// console.log(sec(2));
const sec = function second(num2) {
  return num2 + 2;
};
console.log(sec(2));
