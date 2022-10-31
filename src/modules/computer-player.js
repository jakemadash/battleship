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
    const index = getRandomInt(validCoordinates.length - 1);
    const coordinates = validCoordinates[index];
    const result = player.receiveAttack(coordinates);
    return [result, index];
  };

  return { play, gameBoard };
};

export { ComputerPlayer };
