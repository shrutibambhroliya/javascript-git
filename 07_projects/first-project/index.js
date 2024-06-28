const button = document.querySelectorAll(".button");
console.log(button);
const body = document.querySelector("body");

// button.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log("e", e);
//     console.log(e.target);
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "white") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});
