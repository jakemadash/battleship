/* eslint-disable no-undef */
import { Gameboard } from "./gameboard.js";

const gameBoard = Gameboard();
const board = gameBoard.createBoard();

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

test.todo("places ships on correct coordinates");
