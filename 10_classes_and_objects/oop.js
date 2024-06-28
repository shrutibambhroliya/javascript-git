// this keyword use in only current context
// oop- object oriented programming

const abc = {
  name: "shruti",
  email: "shruti@email.examole",
  age: 22,
  mayFun: function () {
    console.log(`name:${this.name}`);
    console.log(`email:${this.email}`);
    console.log(this);
  },
};

// console.log(abc.name);
// console.log(abc.mayFun());
// console.log(this);

//*****************constructor******************

// new keyword :- new keyword lakhiye atle constructor function create thai che ,
//   new keyword thi empty object bane che

// step 1:   new keyword lakhiye atle empty object  create thai che
// step 2:  constructor function che ae sreate thai che new keyword na karne and je
//         argument aapi hoi te pack kari ne de
// step 3 :  this keyword ma je argument hooi che te inject thai che
// step 4 :function ma te argument mali jai  che

function User(username, myEmail, loggedIn) {
  (this.username = username),
    (this.myEmail = myEmail),
    (this.loggedIn = loggedIn);

  return this;
}

const userOne = new User("shruti", "shrutiBambhroliya", true);
const userTwo = new User("darshik", "darshikBambhroliya", false);
console.log(userOne);
console.log(userTwo);
