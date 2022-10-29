const DOM = () => {
  async function playerMove() {
    const computerSquares = document.querySelectorAll(".computer-square");
    computerSquares.forEach((square) => {
      square.addEventListener(
        "click",
        () => {
          if (square.textContent === "") return square.dataset.number;
        },
        { once: true }
      );
    });
  }

  return { playerMove };
};

export { DOM };
