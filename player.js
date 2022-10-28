import { Gameboard } from "./gameboard.js";
import { ComputerPlayer } from "./computer-player.js";

const Player = () => {
  const board = Gameboard();

  const play = (coordinates) => ComputerPlayer.board.receiveAttack(coordinates);

  return { board, play };
};

export { Player };
