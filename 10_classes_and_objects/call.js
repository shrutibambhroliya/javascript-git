function setUser(username) {
  console.log("called");
  this.username = username;
}

function createUser(username, email, password) {
  setUser.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("bambhroliya", "shruti@exa", "123");

console.log(chai);
