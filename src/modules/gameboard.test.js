/* eslint-disable no-undef */
import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";

const ship = Ship("testShip", 1);
const shipTwo = Ship("testShipTwo", 1);
const gameBoard = Gameboard();
const board = gameBoard.board;
const ships = gameBoard.ships;

test("creates board with correct number of squares", () => {
  expect(board.length).toBe(100);
});

test("squares have correct coordinate values", () => {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect([i, j]).toEqual(board[count].coordinates);
      count++;
    }
  }
});

test("squares all have ship property", () => {
  for (let i = 0; i < 100; i++) {
    expect(board[i].ship).toBeDefined();
  }
});

test("places ships on specified coordinates", () => {
  ships.push(ship);
  ships.push(shipTwo);
  gameBoard.placeShips(null, null);
  expect(board[0].ship).toBe(ship);
  expect(board[10].ship).toBe(shipTwo);
  gameBoard.placeShips(shipTwo, [{dataset: {number: 4}}, {dataset: {number: 5}}]);
  expect(board[3].ship).toBe(shipTwo);
  expect(board[4].ship).toBe(shipTwo);
});

test("ship and board values update correctly after attack", () => {
  board[0].ship = ship;
  gameBoard.receiveAttack([0, 0]);
  gameBoard.receiveAttack([0, 1]);
  expect(board[0].hit).toBe(true);
  expect(board[0].ship.isSunk()).toBe(true);
  expect(board[1].hit).toBe(false);
});

test("reports whether all ships have sunk", () => {
  board[2].ship = shipTwo;
  expect(board[0].ship.isSunk()).toBe(true);
  expect(gameBoard.fleetSunk()).toBe(false);
  gameBoard.receiveAttack([0, 2]);
  expect(gameBoard.fleetSunk()).toBe(true);
});
