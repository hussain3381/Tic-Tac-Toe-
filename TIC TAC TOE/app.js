let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".resetbtn");
let msgWiner = document.querySelector("span");
let playerO = document.querySelector("#playerO");
let playerX = document.querySelector("#playerX");
let turn ="O";
let O = 0;
let X = 0;
let winpatt= [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
// /funcctions
const updateScore = (p1) => {
if(p1 === "O"){
  O++ ;
  playerO.innerText=` ... ${O} ...`;
  playerO.style.color ='green';
  playerX.style.color ='red';
} else if(p1 === "X") {
  X++;
  playerX.innerText=` ... ${X} ...`;
  playerX.style.color ='green';
  playerO.style.color ='red';
}
}
const winCheker=(box)=>{
 
for (const patt of winpatt) {
 
 let p1 = boxes[patt[0]].innerText;
 let p2 = boxes[patt[1]].innerText;
 let p3 = boxes[patt[2]].innerText;
 if(p1 != "" && p2 != "" && p3 != ""){
  if(p1 == p2 && p2 == p3){
    console.log(p1,"winner");
    updateScore(p1);
    msgWiner.innerHTML=`Winner is <p> "${p1}"</p>`;
    for(let box of boxes){
      box.disabled=true;
    }

  }
 }
}
}


let GameTurn=(box)=>{
  if (turn === "O") {
  box.innerText='O';
  box.style.color = "red";
  // box.style.backgroundColor = "yellow";
  turn ="X";
  box.disabled=true;
}else if (turn==="X") {
  box.innerText='X';
  box.style.color ="#0344f7"
  // box.style.backgroundColor = "yellow"
  turn ="X";
  turn="O";
  box.disabled=true;
};
// console.log(box);

}
const gameReset=()=>{
  console.log('work');
  for (const box of boxes) {
    box.disabled=false;
    box.innerText="";
    box.style.backgroundColor = "";
    box.style.color ="";
    // playerO.style.color ='';
    // playerX.style.color ='';
  }
}

btn.addEventListener("click",gameReset);
btn.addEventListener("dblclick",()=>{
  O = 0;
  X = 0;
  playerO.innerText=`${O}`;
  playerX.innerText=`${X}`;
  playerO.style.color ='';
  playerX.style.color ='';
});
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    GameTurn(box);
    winCheker(box)
  });
});
