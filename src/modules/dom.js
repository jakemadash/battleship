const DOM = () => {
  const computerBoard = document.querySelector(".computer-board");

  async function playerMove() {
    return new Promise((resolve) => {
      computerBoard.addEventListener("click", (e) => {
        console.log(e)
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

  return { playerMove, markSquare };
};

export { DOM };
