// then direct resolve sathe connected che

// first time how to write

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

// second time how to write
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task resolved");
});

// third time how to write

const promiseThird = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("data is here");
    resolve({ name: "shruti", email: "shruti@example" });
  }, 1000);
});
promiseThird.then(function (user) {
  console.log(user);
});

// forth time how to write

const promiseForth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "darshik", email: "darshik@example" });
    } else {
      reject("ERROR:error something get wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const store = await promiseForth;
    console.log(store);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// next method

async function allUserData() {
  try {
    const store = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await store.json();
    console.log(data);
  } catch (error) {
    console.log("e", error);
  }
}
allUserData();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((err) => console.log("e", err));
