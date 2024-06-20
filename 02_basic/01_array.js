const arrr = new Array();
console.log(arrr);
console.log(typeof arrr);

// array ma index no. 0 thi start thai
// array ma badhi datatype lakhi sakai

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
console.log(arr1.indexOf(1));

console.log(arr1.push(6));
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);

console.log(arr1.unshift(0));
console.log(arr1);

console.log(arr1.shift());
console.log(arr1);

// slice,splice

console.log("A", arr1);
// slice ma last index include no thai
console.log(arr1.slice(0, 3));
console.log("B", arr1);

console.log(arr1.splice(0, 3));
console.log("C", arr1);
console.log(arr1);

console.log(arr1.join());
