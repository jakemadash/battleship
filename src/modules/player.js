import { Gameboard } from "./gameboard.js";

const Player = () => {
  const gameBoard = Gameboard();
  gameBoard.createFleet();

  const play = (computer, playerMove) => {
    // get coordinates based on selected square's data number and send attack to computer
    const coordinates = gameBoard.board[playerMove - 1].coordinates;
    const targetSquare = computer.gameBoard.receiveAttack(coordinates);
    return targetSquare;
  };

  return { play, gameBoard };
};

export { Player };
