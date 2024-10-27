let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".resetbtn");
let turn ="O";
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

const winCheker=(box)=>{
 
for (const patt of winpatt) {
 
 let p1 = boxes[patt[0]].innerText;
 let p2 = boxes[patt[1]].innerText;
 let p3 = boxes[patt[2]].innerText;
 if(p1 != "" && p2 != "" && p3 != ""){
  if(p1 == p2 && p2 == p3){
    console.log(p1,"winner");
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
  turn ="X";
  box.disabled=true;
}else if (turn==="X") {
  box.innerText='X';
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
  }
}

btn.addEventListener("click",gameReset)
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    GameTurn(box);
    winCheker(box)
  });
});
