import { Player } from "./modules/player.js";
import { ComputerPlayer } from "./modules/computer-player.js";
import { DOM } from "./modules/dom.js";

const dom = DOM();
const player = Player();
const computer = ComputerPlayer();

console.log(computer.gameBoard.board[0]);

while (
  player.gameBoard.fleetSunk() === false &&
  computer.gameBoard.fleetSunk() === false
) {
  const playerMove = await dom.playerMove();
  const index = parseInt(playerMove.dataset.number);
  let targetSquare = player.play(computer, index);
  dom.markSquare(playerMove, targetSquare);
  targetSquare = computer.play(player.gameBoard);
  const computerMove = document.querySelector(
    `.player-board>[data-number='${targetSquare[1] + 1}']`
  );
  setTimeout(dom.markSquare, 800, computerMove, targetSquare[0]);
}
alert("winner!");
