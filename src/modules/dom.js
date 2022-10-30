const DOM = () => {
  const computerSquares = document.querySelectorAll(".computer-square");

  async function getMove(square) {
    await square.addEventListener(
      "click",
      () => {
        if (square.textContent === "") {
          square.classList.remove("computer-square");
          return square;
        }
      },
      { once: true }
    );
  }

  async function playerMove() {
    let move = "";
    computerSquares.forEach(async (square) => {
      move = await getMove(square);
    });
    return move;
  }

  const markSquare = (playerMove, playerHit) => {
    if (playerHit === true) {
      playerMove.textContent = "x";
      playerMove.style.color = "red";
    } else playerMove.textContent = "o";
  };

  return { playerMove, markSquare };
};

export { DOM };
