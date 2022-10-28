import { Ship } from "./ship.js";

const Gameboard = () => {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push({ coordinates: [i, j], ship: null });
      }
    }
    return board;
  };

  const board = createBoard();

  const createFleet = () => {
    const destroyer = Ship("destroyer", 2);
    const submarine = Ship("submarine", 3);
    const cruiser = Ship("cruiser", 3);
    const battleship = Ship("battleship", 4);
    const carrier = Ship("carrier", 5);
    const ships = [destroyer, submarine, cruiser, battleship, carrier];
    return ships;
  };

  const placeShips = () => {
    const ships = createFleet();
    let count = 0;
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].length; j++) {
        board[count + j].ship = ships[i].name;
      }
      count += 10;
    }
    return board;
  };
  return { createBoard, placeShips };
};

export { Gameboard };
