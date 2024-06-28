const myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());

const createDay = new Date(2005, 8, 18);
console.log(createDay.toDateString());
console.log(createDay.getDay());

const day1 = new Date(2005, 8, 18, 3, 0);
console.log(day1.toLocaleString());

const day2 = new Date("2023-01-18");
console.log(day2.toLocaleDateString());

const date = new Date("01-15-2024");
console.log(date.toLocaleString());

let herr = Date.now();
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    month: "long",
  })
);
