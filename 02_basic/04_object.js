const abc = new Object();
console.log(abc);

const xyz = {};
console.log(xyz);

xyz.name = "shruti";
xyz.email = "shruti@gmail.com";
xyz.id = "username";
xyz.age = 22;

console.log(xyz.name);

const reff = {
  name: "dax",
  email: "dax@email.com",
  age: {
    age1: 25,
    age2: 55,
    number: {
      num1: 1526,
      num2: 7594,
    },
  },
};
console.log(reff.age.number.num2);

// combine object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj5 = { e: 3, f: 4 };

console.log(obj1, obj2);

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

const obj4 = { ...obj1, ...obj2, ...obj5 };
console.log(obj4);

// database array and object

const your = [
  {
    name: "hello",
    email: "hello@gmail.com",
    number: 321,
  },
  {
    name: "hello",
    email: "hello@gmail.com",
    number: 789456321,
  },
  {
    name: "hello",
    email: "shruti@gmail.com",
    number: 789456321,
  },
];
console.log(your);
console.log(your[0].number);

console.log(Object.keys(xyz));
console.log(Object.values(xyz));
console.log(Object.entries(xyz));
console.log(xyz.hasOwnProperty("id"));

// object destructuring

const course = {
  courseName: "javascript",
  fee: 999,
  teacher: "hitesh",
};
// console.log(course.fee);
const { fee } = course;
console.log(fee);

const { teacher: sir } = course;
console.log(sir);
