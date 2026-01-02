const boxes = document.querySelectorAll(".box");
const reset_btn = document.querySelector("#reset");
const res = document.querySelector(".winHeading");
let player = true;

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player) {
      box.innerText = "O";
      box.style.color =  "Red";
      player = false;
    } else {
      box.innerText = "X";
      box.style.color = "green";
      player = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

function checkwinner() {
  for (let val of arr) {
    let [a, b, c] = val;

    if (
      boxes[a].innerText !== "" &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[b].innerText === boxes[c].innerText
    ) {
      res.innerHTML = `<b>Congrats! Player ${boxes[a].innerText} is win.🎉</b>`;
      res.scrollIntoView({behavior: "instant" , block : "center"});
      allBoxDisabled();
      return;
    }

    let filledBoxes = 0;
    boxes.forEach((box) => {
      if (box.innerText !== "") {
        filledBoxes++;
      }
    });
    if (filledBoxes === boxes.length) {
      res.innerHTML = `<b>Match is Draw!</b>`;
      res.scrollIntoView({behavior: "smooth", block: "center"});
    }
  }
};

function allBoxDisabled() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function clearBox(){
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    player = true;
    res.innerText = "";
}

// Me code 

reset_btn.addEventListener("click", () => {
    clearBox(); 
    window.scrollTo({behavior: "smooth", top : 0});
});
