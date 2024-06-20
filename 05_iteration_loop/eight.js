// acc=accumulator;
// currVal= currentValue;

const abc = [1, 2, 3, 4, 5];
const xyz = abc.reduce(function (acc, currVal) {
  return acc + currVal;
}, 0);
console.log(xyz);

const beauty = [
  {
    makeup: "rare beauty",
    price: 299,
  },
  {
    eyemakeupshadow: "rare beauty",
    price: 599,
  },
  {
    lipmakeupstic: "rare beauty",
    price: 399,
  },
  {
    linear: "rare beauty",
    price: 199,
  },
];

const make = beauty.reduce((acc, index) => acc + index.price, 0);
console.log(make);
