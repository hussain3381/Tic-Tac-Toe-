let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".resetbtn");
let arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
let turn ="O";
function gamelogic() {
  for (let i = 0; i < arr.length; i++) {
    const box = arr[i];
    console.log(boxes[box[0]],boxes[box[1]],boxes[box[2]]);
    
  };
}
let GameTurn=(box)=>{
  if (turn === "O") {
  box.innerText='O';
  turn ="X";
  box.disable=true;
}else if (turn==="X") {
  box.innerText='X';
  turn="O";
  box.disable=true;
};



}
btn.addEventListener("click", gamelogic);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    GameTurn(box);
  });
});
