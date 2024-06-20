for (let index = 0; index < 5; index++) {
  const element = index;
  //   console.log(element);
}

for (let i = 0; i < 10; i++) {
  const ele = i;
  if (i == 5) {
    console.log(`5 is nice number`);
  }
  //   console.log(ele);
}

for (let i = 0; i < 10; i++) {
  // const element = i;
  //   console.log(`outer number ${i}`);

  for (let j = 0; j < 10; j++) {
    // const element = j;
    // console.log(`inner number ${j}  and inner outer ${i}`);
  }
}

for (let i = 0; i < 10; i++) {
  // const element = i;
  //   console.log(`tables ${i}`);

  for (let j = 0; j < 10; j++) {
    // const element = j;
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const abc = ["ratan", "gautam", "mukesh"];

for (let index = 0; index < abc.length; index++) {
  const element = abc[index];
  //   console.log(element);
}

// break and continue
for (let i = 0; i < 10; i++) {
  const element = i;
  if (i == 5) {
    console.log(`hii 5 is over`);
    break;
  }
  console.log("hii", i);
}

for (let k = 0; k <= 10; k++) {
  const element = k;
  if (k == 5) {
    console.log(`helllo 5 is over`);
    continue;
  }
  console.log("hello", k);
}
