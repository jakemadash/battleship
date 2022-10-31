import { Gameboard } from "./gameboard.js";

const Player = () => {
  const gameBoard = Gameboard();
  gameBoard.placeShips();

  const play = (computer, playerMove) => {
    const coordinates = gameBoard.board[playerMove - 1].coordinates;
    const targetSquare = computer.gameBoard.receiveAttack(coordinates);
    return targetSquare;
  };

  return { play, gameBoard };
};

export { Player };
