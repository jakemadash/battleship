import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

const ComputerPlayer = () => {
  const gameBoard = Gameboard();
  const board = gameBoard.placeShips();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const validCoordinates = (coordinates, playerBoard) => {
    const targetSquare = playerBoard.find(
      (square) =>
        JSON.stringify(coordinates) === JSON.stringify(square.coordinates)
    );
    if (targetSquare.hit !== null) return false;
    else return true;
  };

  const play = (player) => {
    let coordinates = [getRandomInt(9), getRandomInt(9)];
    while (validCoordinates(coordinates, player.board) === false)
      coordinates = [getRandomInt(9), getRandomInt(9)];
    const result = player.receiveAttack(coordinates);
    return result;
  };

  return { board, play, gameBoard };
};

export { ComputerPlayer };
