const Gameboard = () => {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push([i, j]);
      }
    }
    return board;
  };
  return { createBoard };
};

export { Gameboard };
