// prototype

const superHero = ["hulk", "spiderMan"];

const myHeros = {
  hulk: "hammer",
  spiderMan: "sling",
  getOverHero: function () {
    console.log(`${this.spiderMan}`);
  },
};

// object ne power aapiye to function,Array,string  ne access male che

Object.prototype.shruti = function () {
  console.log("shruti is in all object");
};
myHeros.shruti();
superHero.shruti();

// Array ne power aapiye to function,string k object ne koi access malti nathi

Array.prototype.heyShruti = function () {
  console.log(`shruti is present in all array`);
};

superHero.heyShruti();
// myHeros.heyShruti();

// inheritance

const User = {
  hey: "world",
};

const teacher = {
  makevideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "js assignment",
  fulltime: true,
  __proto__: teachingSupport,
};
teacher.__proto__ = User;

// modern Syntax
Object.setPrototypeOf(teachingSupport, teacher);

let myKeyWord = "helloWorld     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
};
myKeyWord.trueLength();
"shruti".trueLength();
"darshik".trueLength();
