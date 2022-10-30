import { Gameboard } from "./gameboard.js";
import { ComputerPlayer } from "./computer-player.js";

const Player = () => {
  const gameBoard = Gameboard();
  gameBoard.placeShips();

  const play = (playerMove) => {
    const coordinates = gameBoard.board[playerMove - 1].coordinates;
    const hit = ComputerPlayer.board.receiveAttack(coordinates);
    return hit;
  };

  return { play, gameBoard };
};

export { Player };
