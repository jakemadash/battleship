import { Player } from "./modules/player.js";
import { ComputerPlayer } from "./modules/computer-player.js";
const player = Player();
const computer = ComputerPlayer();
computer.play(player.gameBoard);

