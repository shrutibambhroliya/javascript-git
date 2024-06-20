// singleton => Object.create thi bane
const abc = Symbol("hii");

const self = {
  name: "hello",
  "full name": "bambhroliya",
  [abc]: "hello",
  age: 22,
  location: "surat",
  email: "shrutiBambhroliya@gmail.com",
  days: ["sunday", "monday"],
};
// object spread method 1
console.log(self.name);

// object sprea 2
// . na lagavi to brackets ma string ma lakhavuu pade

console.log(self["email"]);
console.log(self[abc]);
console.log(typeof self[abc]);

// Object.freeze(self);
self.email = "darshikBambhroliya";
console.log(self["email"]);

self.greeting = function () {
  console.log("hello");
};
console.log(self.greeting());

// tick sign ma object spread karva mate this . lakhvu
self.greeting2 = function () {
  console.log(`my name is ${this.name}`);
};
console.log(self.greeting2());
