import { Gameboard } from "./gameboard.js";
import { ComputerPlayer } from "./computer-player.js";

const Player = () => {
  const gameBoard = Gameboard();
  gameBoard.placeShips();
  const play = (coordinates) => ComputerPlayer.board.receiveAttack(coordinates);

  return { play, gameBoard };
};

export { Player };
