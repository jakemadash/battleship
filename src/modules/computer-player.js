import { Gameboard } from "./gameboard.js";

const ComputerPlayer = () => {
  const gameBoard = Gameboard();
  gameBoard.createFleet();
  gameBoard.placeShips(null, null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const play = (player) => {
    const validSquares = player.board.filter((square) => square.hit === null);
    const validCoordinates = validSquares.map((square) => square.coordinates);
    const index = getRandomInt(validCoordinates.length - 1);
    const coordinates = validCoordinates[index];
    const result = player.receiveAttack(coordinates);
    const originalIndex = parseInt(coordinates.join(""));
    console.log(coordinates, originalIndex);
    return [result, originalIndex];
  };

  return { play, gameBoard };
};

export { ComputerPlayer };
