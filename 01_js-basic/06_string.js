const abc = "shruti  shruti";
console.log(abc);

const xyz = new String();
console.log(xyz);

const a = "reserve";
const b = "RESERVE";

const name = "shruti bambhroliya!";
const email = "bambhroliya";
const self = "my name is wow";
const cher = self.split();
const url = "htttp://shrutibambhroliya%20shruti";

console.log(`my name is ${name} and my email id ${email}`);
console.log(name.length);
console.log(name.charAt(2));
console.log(name.charCodeAt("s"));
console.log(name.codePointAt(1));
console.log(name.concat(" ", email));
console.log(name.endsWith("ti!"));
console.log(name.fixed());
console.log(name.indexOf("t"));
console.log(` ${name.includes(email)}`);
console.log(`${name.lastIndexOf(email)}`);
console.log(`hello${a.localeCompare(b)}`);
console.log(`${abc.padEnd(15, ".")}`);
console.log(`my name is ${abc.repeat(2)}`);
console.log(`30${url.replace("%20", "-")}`);
console.log(`${abc.replaceAll("shruti", "sutu")}`);
// slice ma last character include na thai
console.log(`${name.slice(0, 4)}`);

console.log(`${cher}`);
