// filter ma function reaturn value kare
// filter ma true and false answer male
// foreach value return na kare

const arr = [1, 2, 3, 4, 5, 6];
const brr = [];

const crr = arr.forEach((item) => {
  //   console.log(item);
  //   return item;
});
// console.log(crr);

arr.forEach((item) => {
  if (item > 2) {
    brr.push(item);
  }
});
// console.log(brr);

const pet = arr.filter((item) => item >= 2);
// console.log(pet);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const newBook = books.filter((bk) => bk.genre === "History");
console.log(newBook);

const myBook = books.filter(
  (bk) => bk.publish >= 1989 && bk.genre === "Non-Fiction"
);
console.log(myBook);
