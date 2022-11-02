/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import { DOM } from "./dom.js";
import { ComputerPlayer } from "./computer-player.js";

const dom = DOM();
const computer = ComputerPlayer();
const board = computer.gameBoard.board;
const computerSquareOne = { textContent: "", style: { color: "" } };
const computerSquareTwo = { textContent: "", style: { color: "" } };

test("marks square depending on whether ship is present on square", () => {
  board[0].hit = true;
  board[99].hit = false;
  dom.markSquare(computerSquareOne, board[0]);
  dom.markSquare(computerSquareTwo, board[99]);
  expect(computerSquareOne.textContent).toBe("x");
  expect(computerSquareOne.style.color).toBe("red");
  expect(computerSquareTwo.textContent).toBe("o");
});

