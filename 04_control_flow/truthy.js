const abc = [];

if (abc) {
  console.log("value");
}

// falsy value: false,0,-0,BigInt,0n,nan,null,undefined,""
// truthy value:true,1,{},[],"false"," ",function(){}

// empty arrey in value check

if (abc.length == 0) {
  console.log("array is empty");
}

// empty object in value check
if (Object.keys(abc).length == 0) {
  console.log("object is empty");
}

// nullish operatore
let hey;
// hey = 5 ?? 10;
hey = null ?? 10;
// hey = undefined ?? 30;
// hey = undefined ?? 10 ?? 15;
console.log(hey);

// ternury operater
// condition?true:false
const some = 100;
some <= 80 ? console.log("less than 80") : console.log("less than 180");
