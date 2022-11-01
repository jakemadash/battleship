const DOM = () => {
  const computerBoard = document.querySelector(".computer-board");

  const shipCoordinates = () => {
    const coordinates = [];
    const destroyer = prompt("Enter destroyer (length: 2) coordinates");
    const submarine = prompt("Enter submarine (length: 3) coordinates");
    const cruiser = prompt("Enter cruiser (length: 3) coordinates");
    const battleship = prompt("Enter battleship (length: 4) coordinates");
    const carrier = prompt("Enter carrier (length: 5) coordinates");
    coordinates.push(destroyer, submarine, cruiser, battleship, carrier);
    return coordinates;
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

  return { shipCoordinates, playerMove, markSquare };
};

export { DOM };
