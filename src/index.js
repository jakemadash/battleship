import { Player } from "./modules/player.js";
import { ComputerPlayer } from "./modules/computer-player.js";
import { DOM } from "./modules/dom.js";

const dom = DOM();
const player = Player();
const computer = ComputerPlayer();

const playerMove = await dom.playerMove();
const index = parseInt(playerMove.dataset.number);
let targetSquare = player.play(computer, index);
dom.markSquare(playerMove, targetSquare);
targetSquare = computer.play(player.gameBoard);
const computerMove = document.querySelector(
  `.player-board>[data-number='${targetSquare[1] + 1}']`
);
dom.markSquare(computerMove, targetSquare[0]);
