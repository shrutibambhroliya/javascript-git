const news = {
  name: "hello",
  username: "hii shruti",

  expectation: function () {
    console.log(`my username is ${this.username}`);
    console.log(this);
  },
};
news.expectation();
// news.username = "sam";
// news.expectation();

// console.log(this);

function chai() {
  let name = "hitesh";
}
console.log(this);

const tea = () => {
  let same = "hii";
};
console.log(this);

// arrow function method

const abc = (num1, num2) => num1 + num2;
console.log(abc(1, 2));

const ric = (cell1, cell2) => cell1 + cell2;
console.log(ric(1, 8));

// arrow in object
const srp = (hii) => ({ news: "name" });
console.log(srp());
