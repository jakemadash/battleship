import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

const ComputerPlayer = () => {
  const board = Gameboard();

  const play = () => {
    const coordinates = [];
    
    Player.board.receiveAttack(coordinates);
  }

  return { board, play };
};

export { ComputerPlayer };
