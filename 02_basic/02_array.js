const bw_heros = ["salman", "sharukh"];
const wc_heros = ["ironMan", "spiderMan", "superMan"];

// bw_heros.push(wc_heros);
// console.log(bw_heros);

const all = bw_heros.concat(wc_heros);
console.log(all);

const well = [...bw_heros, ...wc_heros];
console.log(well);

const mix = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];
console.log(mix.flat(Infinity));

const word = "hello";
console.log(Array.isArray(word));
console.log(Array.isArray([1, 5, 4]));

const like = "shruti";
console.log(Array.from(like));

console.log(Array.from({ name: "shruti" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
