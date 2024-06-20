// foreach
// foreach in callback function use
// callback function :- function nu name no hoi tene
const arr = ["js", "ruby", "react", "mongo", "express"];

arr.forEach(function (item) {
  //   console.log(item);
});

const obj = [
  {
    js: "javascript",
    rb: "rubby",
    cpp: "c++",
    mb: "mongo",
  },
  {
    js: "typescript",
    rb: "rubby",
    cpp: "c++",
    mb: "mongo",
  },
];

obj.forEach((peace) => {
  //   console.log(peace);
  console.log(peace.js);
});

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

function hever(item) {
  console.log(item);
}
arr.forEach(hever);
