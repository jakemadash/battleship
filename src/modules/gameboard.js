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
  const ships = [];

  const createFleet = () => {
    const destroyer = Ship("destroyer", 2);
    const submarine = Ship("submarine", 3);
    const cruiser = Ship("cruiser", 3);
    const battleship = Ship("battleship", 4);
    const carrier = Ship("carrier", 5);
    ships.push(destroyer, submarine, cruiser, battleship, carrier)
    return ships;
  };

  const placeShips = () => {
    let count = 0;
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].length; j++) {
        board[count + j].ship = ships[i];
      }
      count += 10;
    }
    return board;
  };

  const fleetSunk = () => {
    let sunk = true;
    for (const ship of ships) {
      if (ship.isSunk() === false) sunk = false;
    }
    return sunk;
  };

  const receiveAttack = (coordinates) => {
    const targetSquare = board.find(
      (square) =>
        JSON.stringify(coordinates) === JSON.stringify(square.coordinates)
    );
    if (targetSquare.ship) {
      targetSquare.ship.hit();
      console.log(targetSquare.ship.isSunk());
      console.log(board[0].ship.isSunk());
      console.log(fleetSunk());
      targetSquare.hit = true;
    } else targetSquare.hit = false;
    return targetSquare;
  };

  return {
    createBoard,
    createFleet,
    placeShips,
    receiveAttack,
    fleetSunk,
    board,
    ships,
  };
};

export { Gameboard };
