const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log(`chai bani nahi hai`);
  },
};

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
