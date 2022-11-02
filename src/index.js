import { Player } from "./modules/player.js";
import { ComputerPlayer } from "./modules/computer-player.js";
import { DOM } from "./modules/dom.js";

const dom = DOM();
const player = Player();
const computer = ComputerPlayer();
const ships = player.gameBoard.ships;

for (let i = 0; i < ships.length; i++) {
  dom.shipHeader(ships[i]);
  const chosenSquares = await dom.placeShip(ships[i]);
  const confirm = await dom.confirmPlacement();
  if (confirm === false) {
    chosenSquares.forEach((square) => {
      square.style.backgroundColor = "white";
    });
    i--;
  } else {
    dom.drawShip(chosenSquares, ships[i]);
    if (i === ships.length - 1) dom.shipHeader(null);
  }
}

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
if (player.gameBoard.fleetSunk() === true) alert("Computer wins!");
else alert("You win!");
