const DOM = () => {
  const computerBoard = document.querySelector(".computer-board");
  const playerBoard = document.querySelector(".player-board");
  const buttons = document.querySelector(".buttons");

  const shipHeader = (ship) => {
    const header = document.querySelector("h3");
    if (ship === null) header.textContent = "";
    else
      header.textContent = `Choose starting and ending squares for ${ship.name} (length: ${ship.length})`;
    return header.textContent;
  };

  // fill in any squares in between chosen start and end points
  const drawShip = (chosenSquares, ship) => {
    const playerSquares = document.querySelectorAll(".player-square");
    const squareOne = parseInt(chosenSquares[0].dataset.number);
    const squareTwo = parseInt(chosenSquares[1].dataset.number);

    // determine if horizontal or vertical move
    const horizontal = squareTwo - squareOne === ship.length - 1;
    const vertical = squareTwo - squareOne === (ship.length - 1) * 10;
    const filledSquares = [...chosenSquares];
    if (horizontal)
      for (let i = squareOne; i < squareTwo; i++) {
        // increase by 1 square for horizontal and color blue
        playerSquares[i].style.backgroundColor = "blue";
        filledSquares.push(playerSquares[i]);
      }
    else if (vertical)
      for (let i = squareOne - 1; i < squareTwo; i += 10) {
        // increase by 10 squares for vertical and color blue
        playerSquares[i].style.backgroundColor = "blue";
        filledSquares.push(playerSquares[i]);
      }
    return filledSquares;
  };

  async function confirmPlacement() {
    return new Promise((resolve) => {
      buttons.addEventListener("click", (e) => {
        buttons.setAttribute("hidden", "");
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
    let chosenSquares = [];
    const controller = new AbortController();
    return new Promise((resolve) => {
      playerBoard.addEventListener(
        "click",
        (e) => {
          if (e.target.style.backgroundColor !== "blue") {
            // don't listen if square has already been selected/colored
            e.target.style.backgroundColor = "blue";
            chosenSquares.push(e.target);
          }
          if (
            // invalid move (diagonal)
            chosenSquares.length === 2 &&
            validateSquares(ship, chosenSquares) === false
          ) {
            alert(
              "Squares must be ship length apart and horizontal/vertical only. Please try again."
            );
            chosenSquares.forEach((square) => {
              // reset selected squares to white and clear selection array
              square.style.backgroundColor = "white";
            });
            chosenSquares = [];
          } else if (
            // valid move
            chosenSquares.length === 2 &&
            validateSquares(ship, chosenSquares) === true
          ) {
            // stop event listener, show confirm/redo buttons, and return chosen squares
            controller.abort();
            buttons.removeAttribute("hidden");
            resolve(
              chosenSquares.sort((a, b) => a.dataset.number - b.dataset.number)
            );
          }
        },
        { signal: controller.signal }
      );
    });
  }

  async function playerMove() {
    return new Promise((resolve) => {
      computerBoard.addEventListener("click", (e) => {
        // ensure blank square
        if (e.target.textContent === "") {
          // remove hover pointer and return chosen square
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

  return {
    shipHeader,
    placeShip,
    confirmPlacement,
    playerMove,
    markSquare,
    drawShip,
  };
};

export { DOM };
