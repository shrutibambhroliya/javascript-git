// for of loop :array,map access thai
// object for of ma access na thai

const abc = [1, 2, 3, 4, 5];
for (const a of abc) {
  //   console.log(a);
}

const xyz = ["rama", "neeta", "seeta", "geeta"];
for (const x of xyz) {
  //   console.log(x);
}
const word = "hello world!";
for (const w of word) {
  //   console.log(w);/
}

// map
const ret = new Map();
ret.set("USA", "united state of india");
ret.set("IN", "india");
ret.set("FR", "france");

console.log(ret);

for (const [key, value] of ret) {
  console.log(`${key} :- ${value}`);
}
