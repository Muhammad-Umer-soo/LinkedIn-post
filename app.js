const boxes = document.querySelectorAll(".box");
const winner = document.querySelector(".winner");
let xMove = true;
const win = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    playerTurn(box, index);
  });
});

function playerTurn(box, index) {
  if (box.textContent !== "") return;
  
  if (xMove) {
    box.textContent = "X";
    xMove = false;
  } else {
    box.textContent = "O";
    xMove = true;
  }

  win.forEach((value) => {
    if (
      boxes[value[0]].textContent !== "" &&
      boxes[value[0]].textContent === boxes[value[1]].textContent &&
      boxes[value[0]].textContent === boxes[value[2]].textContent
    ) {
      winner.innerHTML = `Winner is ${boxes[value[0]].textContent}!`;
    }
  });
  console.log(box, index);
}
