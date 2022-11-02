import { Gameboard } from "./gameboard.js";

const ComputerPlayer = () => {
  const gameBoard = Gameboard();
  gameBoard.createFleet();
  gameBoard.placeShips(null, null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const play = (player) => {
    // filter out squares that have already been hit and extract coordinates only
    const validSquares = player.board.filter((square) => square.hit === null);
    const validCoordinates = validSquares.map((square) => square.coordinates);

    // choose random square and attack
    const index = getRandomInt(validCoordinates.length - 1);
    const coordinates = validCoordinates[index];
    const result = player.receiveAttack(coordinates);

    // convert coordinates into 2-digit number to reference DOM square's data number (ex: [2, 0] => 20)
    const originalIndex = parseInt(coordinates.join(""));
    return [result, originalIndex];
  };

  return { play, gameBoard };
};

export { ComputerPlayer };
