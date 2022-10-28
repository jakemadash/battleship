import { Ship } from "./ship.js";

const Gameboard = () => {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push({ coordinates: [i, j], ship: null, hit: null });
      }
    }
    return board;
  };

  const board = createBoard();
  let ships = [];

  const createFleet = () => {
    const destroyer = Ship("destroyer", 2);
    const submarine = Ship("submarine", 3);
    const cruiser = Ship("cruiser", 3);
    const battleship = Ship("battleship", 4);
    const carrier = Ship("carrier", 5);
    ships = [destroyer, submarine, cruiser, battleship, carrier];
    return ships;
  };

  const placeShips = () => {
    const ships = createFleet();
    let count = 0;
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].length; j++) {
        board[count + j].ship = ships[i];
      }
      count += 10;
    }
    return board;
  };

  const receiveAttack = (coordinates) => {
    const targetSquare = board.find(
      (square) =>
        JSON.stringify(coordinates) === JSON.stringify(square.coordinates)
    );
    if (targetSquare.ship) {
      targetSquare.ship.hit();
      targetSquare.hit = true;
    } else targetSquare.hit = false;
  };
  return { createBoard, placeShips, receiveAttack, board };
};

export { Gameboard };
