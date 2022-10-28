import { Gameboard } from "./gameboard.js";
import { ComputerPlayer } from "./computer-player.js";

const Player = () => {
  const gameBoard = Gameboard();
  const board = gameBoard.placeShips();
  const play = (coordinates) => ComputerPlayer.board.receiveAttack(coordinates);

  return { board, play, gameBoard };
};

export { Player };
