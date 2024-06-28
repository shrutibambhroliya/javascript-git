let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessLot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validationGuess(guess);
  });
}

function validationGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("enter a more than 1");
  } else if (guess > 100) {
    alert("enter a less than 100");
  } else {
    previousGuess.push(guess);
  }
  if (guess === 11) {
    displayGuess(guess);
    displayMessage(`game over.random number was ${randomNum} `);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`your number is right `);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`your number is tooo low`);
  } else if (guess > randomNum) {
    displayMessage(`your number is tooo more than`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessLot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(messsage) {
  lowOrHi.innerHTML = `<h2>${messsage}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">start new game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newButton = document.querySelector("#newGame");
  newButton.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numGuess = 1;
    guessLot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
    displayMessage("");
  });
}
