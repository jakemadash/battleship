const DOM = () => {
  const computerBoard = document.querySelector(".computer-board");
  const playerBoard = document.querySelector(".player-board");

  const drawShips = (coordinates) => {
    const playerSquares = document.querySelectorAll(".player-square");
    coordinates.forEach((coordinate) => {
      if (coordinate[0] === 0)
        playerSquares[coordinate[1]].style.backgroundColor = "blue";
      else playerSquares;
    });
  };

  const placeShip = () => {
    const confirm = document.querySelector("button");
    const redo = document.querySelector("button+button");
    const chosenSquares = [];
    const controller = new AbortController();
    playerBoard.addEventListener(
      "click",
      (e) => {
        e.target.style.backgroundColor = "blue";
        chosenSquares.push(e.target);
        if (chosenSquares.length === 2) {
          controller.abort();
          confirm.removeAttribute("hidden");
          redo.removeAttribute("hidden");
        }
      },
      { signal: controller.signal }
    );
    return chosenSquares;
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

  return { placeShip, playerMove, markSquare };
};

export { DOM };
