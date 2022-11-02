const DOM = () => {
  const computerBoard = document.querySelector(".computer-board");
  const playerBoard = document.querySelector(".player-board");
  const buttons = document.querySelector(".buttons");

  const drawShips = (coordinates) => {
    const playerSquares = document.querySelectorAll(".player-square");
    coordinates.forEach((coordinate) => {
      if (coordinate[0] === 0)
        playerSquares[coordinate[1]].style.backgroundColor = "blue";
      else playerSquares;
    });
  };

  async function confirmPlacement() {
    return new Promise((resolve) => {
      buttons.addEventListener("click", (e) => {
        if (e.target.textContent === "confirm") resolve(true);
        else resolve(false);
      });
    });
  }

  const validateSquares = (ship, chosenSquares) => {
    const squareOne = chosenSquares[0].dataset.number;
    const squareTwo = chosenSquares[1].dataset.number;
    const valid =
      Math.abs(squareOne - squareTwo) === ship.length - 1 || // valid horizontal start/end
      Math.abs(squareOne - squareTwo) === (ship.length - 1) * 10; // valid vertical start/end
    if (valid) return true;
    else return false;
  };

  async function placeShip(ship) {
    const chosenSquares = [];
    const valid =
      chosenSquares.length === 2 &&
      validateSquares(ship, chosenSquares) === true;
    const invalid =
      chosenSquares.length === 2 &&
      validateSquares(ship, chosenSquares) === false;
    const controller = new AbortController();
    return new Promise((resolve) => {
      playerBoard.addEventListener(
        "click",
        (e) => {
          e.target.style.backgroundColor = "blue";
          chosenSquares.push(e.target);
          if (invalid) {
            controller.abort();
            alert(
              "Squares must be ship length apart and horizontal/vertical only. Please try again."
            );
            chosenSquares.forEach((square) => {
              square.style.backgroundColor = "white";
            });
            placeShip(ship);
          } else if (valid) {
            controller.abort();
            buttons.removeAttribute("hidden");
            resolve(chosenSquares);
          }
        },
        { signal: controller.signal }
      );
    });
  }

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

  return { placeShip, confirmPlacement, playerMove, markSquare };
};

export { DOM };
