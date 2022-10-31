const DOM = () => {
  const computerBoard = document.querySelector(".computer-board");

  const ships = document.querySelector(".ships");
  const playerBoard = document.querySelector(".player-board");

  const rotate = () => {
    ships.addEventListener("click", (e) => {
      e.target.classList.toggle("rotated");
    });
  };

  const drag = () => {
    let draggedShip = "";

    ships.addEventListener("dragstart", (e) => {
      e.dataTransfer.effectAllowed = "linkMove";
      draggedShip = e.target;
    });
    playerBoard.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });
    playerBoard.addEventListener("drop", (e) => {
      e.preventDefault();
      draggedShip.parentNode.removeChild(draggedShip);
      e.target.appendChild(draggedShip);
    });
  };

  async function playerMove() {
    return new Promise((resolve) => {
      computerBoard.addEventListener("click", (e) => {
        if (e.target.textContent === "") {
          e.target.classList.remove("computer-square");
          resolve(e.target);
        }
      });
    });
  }

  const markSquare = (playerMove, targetSquare) => {
    if (targetSquare.hit === true) {
      playerMove.textContent = "x";
      playerMove.style.color = "red";
    } else playerMove.textContent = "o";
  };

  return { rotate, drag, playerMove, markSquare };
};

export { DOM };
