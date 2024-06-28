const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interValid;

const startChainger = function () {
  if (!interValid) {
    interValid = setInterval(changeBack, 1000);
  }
};

function changeBack() {
  document.body.style.backgroundColor = randomColor();
}

const stopChanger = function () {
  clearInterval(interValid);
  interValid = null;
};

document.querySelector("#start").addEventListener("click", startChainger);
document.querySelector("#stop").addEventListener("click", stopChanger);
