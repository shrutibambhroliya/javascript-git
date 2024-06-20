// control scope
// condition statement :

// if else
// switch case

// condition operatore:
// <,>,<=,>=,!=,!==,==,===

if (2 == "2") {
  console.log("true");
}

if (4 === "4") {
  console.log("true");
} else {
  console.log("fasle");
}

// multiple condition:if else
const score = 1000;

if (score < 1200) {
  let power = "fly";
  console.log(`my bird is ${power}`);
}
// console.log(power);

if (score <= 200) {
  console.log("less than 200");
} else if (score <= 500) {
  console.log("less than 500");
} else if (score <= 750) {
  console.log("less than 750");
} else if (score <= 950) {
  console.log("less than 950");
} else {
  console.log("less than 1200");
}

// multiple condition operatore: logical operatore
// logicale operatore : &&,||
// && operatore:all condition true
// || operataore: any one condition is true

const abc = true;
const part = true;
const xyz = false;

if (abc && part) {
  console.log("value is true");
}

if (abc || part || xyz) {
  console.log("any one condition is true");
}
