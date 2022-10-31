const DOM = () => {
  const computerBoard = document.querySelector(".computer-board");

  const rotate = () => {
    const ships = document.querySelector(".ship-menu");
    ships.addEventListener("click", (e) => {
      e.target.classList.toggle("rotated");
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

  return { rotate, playerMove, markSquare };
};

export { DOM };
