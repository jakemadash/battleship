import { Gameboard } from "./gameboard.js";

const ComputerPlayer = () => {
  const gameBoard = Gameboard();
  gameBoard.placeShips();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const play = (player) => {
    const validSquares = player.board.filter((square) => square.hit === null);
    console.log(validSquares);
    const validCoordinates = validSquares.map((square) => square.coordinates);
    const coordinates =
      validCoordinates[getRandomInt(validCoordinates.length - 1)];
    const result = player.receiveAttack(coordinates);
    return result;
  };

  return { play, gameBoard };
};

export { ComputerPlayer };
