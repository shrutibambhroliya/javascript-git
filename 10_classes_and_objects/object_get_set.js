const User = {
  _email: "happy@face",
  _password: "happy",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
const chai = Object.create(User);
console.log(chai.email);
