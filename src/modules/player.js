import { Gameboard } from "./gameboard.js";
import { ComputerPlayer } from "./computer-player.js";

const Player = () => {
  const gameBoard = Gameboard();
  gameBoard.placeShips();

  const play = (computer, playerMove) => {
    const coordinates = gameBoard.board[playerMove - 1].coordinates;
    const hit = computer.gameBoard.receiveAttack(coordinates);
    return hit;
  };

  return { play, gameBoard };
};

export { Player };
