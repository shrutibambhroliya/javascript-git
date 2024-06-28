// object ma new keyword use

function multiby5(num) {
  return num * 5;
}
multiby5.power = 2;

console.log(multiby5(5));
console.log(multiby5.power);
console.log(multiby5.prototype);

function createUser(username, score) {
  // this:- current context use karva mate use thai
  //   same value che to error na thaai atle this use thai

  (this.username = username), (this.score = score);
}
createUser.prototype.increment = function () {
  console.log(this.score++);
};
createUser.prototype.printMe = function () {
  console.log(`this is my ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

console.log(chai.printMe());
console.log(tea.printMe());
console.log(chai.increment());
console.log(tea.increment());
