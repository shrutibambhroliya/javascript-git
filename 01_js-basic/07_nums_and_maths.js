const abc = 100;
// console.log(abc);

const xyz = new Number(200);
// console.log(xyz);

const rupees = 110;
// console.log(rupees.toFixed(2));

const doller = 115.9875;
// console.log(doller.toExponential(1));

const paisa = 1000000;
// console.log(paisa.toLocaleString("en-In"));

// console.log(doller.toPrecision(3));
// console.log(xyz.toString());

/****************************Math*************************/
console.log(Math.round(22.72));
console.log(Math.ceil(22.85));
console.log(Math.ceil(25.24));
console.log(Math.floor(30.53));
console.log(Math.floor(30.22));
console.log(Math.abs(-5));
console.log(Math.max(1, 5, 4, 8, 9, 5));
console.log(Math.min(0, 1, 5, 2, 4, 7));

console.log(Math.random());
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10 + 1));

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min) + min));
