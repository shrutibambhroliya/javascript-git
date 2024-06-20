// for in loop ma array ,object acess thai but map access na thai

const abc = {
  name: "shruti",
  age: "22",
  occ: "developer",
};

for (const key in abc) {
  let objVal = abc[key];
  console.log(`${key} :- ${objVal}`);
}

const arr = ["a", "b", "c", "d"];
for (const key in arr) {
  let arr1 = arr[key];
  console.log(`${arr1}`);
}
