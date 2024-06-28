// class

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}.ABC`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@code", 123);
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// function
function setUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

setUser.prototype.changeName = function () {
  return `${this.username.toUpperCase()}`;
};
setUser.prototype.encryptPass = function () {
  return `${this.password}XYZ`;
};

const tea = new setUser("tea", "tea@gmai.com", 456);
console.log(tea.changeName(f));
console.log(tea.encryptPass());
