let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".resetbtn");
let msgWiner = document.querySelector("span");
let playerO = document.querySelector("#playerO");
let playerX = document.querySelector("#playerX");
let turn = "O";
let O = 0;
let X = 0;
let filledBoxes = 0;
let winpatt = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

// Sounds import karo
const clickSound = new Audio("./audio/click.mp3");  // Click sound
const winSound = new Audio("./audio/winnerEffect.mp3");      // Win sound

const updateScore = (p1) => {
  if (p1 === "O") {
    O++;
    playerO.innerText = ` ... ${O} ...`;
    playerO.style.color = 'green';
    playerX.style.color = 'red';
  } else if (p1 === "X") {
    X++;
    playerX.innerText = ` ... ${X} ...`;
    playerX.style.color = 'green';
    playerO.style.color = 'red';
  }
};

const winCheker = () => {
  for (const patt of winpatt) {
    let p1 = boxes[patt[0]].innerText;
    let p2 = boxes[patt[1]].innerText;
    let p3 = boxes[patt[2]].innerText;
    if (p1 && p1 === p2 && p2 === p3) {
      updateScore(p1);
      msgWiner.innerHTML = `Winner is <p> "${p1}"</p>`;
      boxes.forEach(box => box.disabled = true);
      winSound.play(); // Ensure win sound plays only on win
      filledBoxes = 0; // Reset filled boxes after win
      return true;
    }
  }
  if (filledBoxes === 9) {
    msgWiner.innerHTML = "It's a Draw!";
    filledBoxes = 0; // Reset for next game
  }
  return false;
};

let GameTurn = (box) => {
  if (turn === "O") {
    box.innerText = 'O';
    box.style.color = "red";
    turn = "X";
  } else {
    box.innerText = 'X';
    box.style.color = "#0344f7";
    turn = "O";
  }
  box.disabled = true;
  filledBoxes++;
  clickSound.play(); // Box par click karne par click sound play
  winCheker();
};

const gameReset = () => {
  clickSound.play();
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "";
    box.style.color = "";
  });
  msgWiner.innerHTML = "";
  filledBoxes = 0;
};

btn.addEventListener("click", gameReset);
btn.addEventListener("dblclick", () => {
  O = 0;
  X = 0;
  playerO.innerText = `${O}`;
  playerX.innerText = `${X}`;
  playerO.style.color = '';
  playerX.style.color = '';
  gameReset();
  clickSound.play();
});

boxes.forEach(box => {
  box.addEventListener("click", () => GameTurn(box));
});
