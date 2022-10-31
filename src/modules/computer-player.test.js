/* eslint-disable no-undef */
import { Player } from "./player.js";
import { ComputerPlayer } from "./computer-player.js";

const computer = ComputerPlayer();
const player = Player();

test("plays move against human and updates board accordingly", () => {
  const move = computer.play(player.gameBoard)[0];
  if (move.ship) {
    expect(move.hit).toBe(true);
  } else expect(move.hit).toBe(false);
});
