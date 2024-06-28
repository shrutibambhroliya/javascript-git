class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`added new course is ${username}`);
  }
}

const chai = new Teacher("chai", "chai@123", "458");
console.log(chai);
console.log(chai.logMe());

const masalaChai = new User("masalaChai");

console.log(masalaChai);
console.log(masalaChai.logMe());

console.log(chai instanceof User);
console.log(masalaChai instanceof User);
