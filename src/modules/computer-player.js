import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

const ComputerPlayer = () => {
  const board = Gameboard();
  board.placeShips();
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const validCoordinates = (coordinates) => {
    const targetSquare = Player.board.find(
      (square) =>
        JSON.stringify(coordinates) === JSON.stringify(square.coordinates)
    );
    if (targetSquare.hit !== null) return false;
    else return true;
  };

  const play = () => {
    let coordinates = [getRandomInt(9), getRandomInt(9)];
    while (validCoordinates(coordinates) === false)
      coordinates = [getRandomInt(9), getRandomInt(9)];
    const result = Player.board.receiveAttack(coordinates);
    return result;
  };

  return { board, play };
};

export { ComputerPlayer };
