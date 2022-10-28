import { Ship } from "./ship.js";

const Gameboard = () => {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push([i, j]);
      }
    }
    return board;
  };

  const createFleet = () => {
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);
    const ships = [destroyer, submarine, cruiser, battleship, carrier]
    return ships;
  };

  const placeShips = () => {
    const ships = createFleet();
    
  }
  return { createBoard };
};

export { Gameboard };
