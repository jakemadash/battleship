import { Player } from "./modules/player.js";
import { ComputerPlayer } from "./modules/computer-player.js";
import { DOM } from "./modules/dom.js";

const dom = DOM();
const player = Player();
const computer = ComputerPlayer();

const playerMove = await dom.playerMove();
console.log(playerMove);
const index = parseInt(playerMove.dataset.number);
const playerHit = player.play(index);
dom.markSquare(playerHit);
// computer.play(player.gameBoard);
