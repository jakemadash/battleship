import { Player } from "./modules/player.js";
import { ComputerPlayer } from "./modules/computer-player.js";
import { DOM } from "./modules/dom.js";

const dom = DOM();
const player = Player();
const computer = ComputerPlayer();

const playerMove = await dom.playerMove();
console.log(playerMove);
const index = parseInt(playerMove.dataset.number);
console.log(index);
const playerHit = player.play(computer, index);
dom.markSquare(playerMove, playerHit);
// computer.play(player.gameBoard);
