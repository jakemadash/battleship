/* eslint-disable no-undef */
import { Ship } from "./ship.js";

const ship = Ship(2);

test("sets ship length", () => {
  expect(ship.length).toBe(2);
});

test("hit method increases hit count", () => {
  expect(ship.hit()).toBe(1);
});

test("hit method changes isSunk to true once hits = ship length", () => {
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
