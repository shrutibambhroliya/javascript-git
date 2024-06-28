// static child ne access na karva dei

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "iphone@proMax");
console.log(Teacher.createId());
