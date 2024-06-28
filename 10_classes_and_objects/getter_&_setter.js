// getter and seetter
// get use kariye atle value set karva mte set use karvu pade
// get=value find  $   set=value set karvi

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}
const tea = new User("hello@abc", "asdfghjkl");

console.log(tea.email);
console.log(tea.password);
