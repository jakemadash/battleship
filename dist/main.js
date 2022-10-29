/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_computer_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/computer-player.js */ \"./src/modules/computer-player.js\");\n\n\nconst player = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)();\nconst computer = (0,_modules_computer_player_js__WEBPACK_IMPORTED_MODULE_1__.ComputerPlayer)();\nconsole.log(computer.play(player.gameBoard));\nconsole.log(computer.play(player.gameBoard));\nconsole.log(computer.play(player.gameBoard));\nconsole.log(computer.play(player.gameBoard));\nconsole.log(computer.play(player.gameBoard));\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/computer-player.js":
/*!****************************************!*\
  !*** ./src/modules/computer-player.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ComputerPlayer\": () => (/* binding */ ComputerPlayer)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n\n\nconst ComputerPlayer = () => {\n  const gameBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n  gameBoard.placeShips();\n\n  function getRandomInt(max) {\n    return Math.floor(Math.random() * max);\n  }\n\n  const play = player => {\n    const validSquares = player.board.filter(square => square.hit === null);\n    console.log(validSquares);\n    const validCoordinates = validSquares.map(square => square.coordinates);\n    const coordinates = validCoordinates[getRandomInt(validCoordinates.length - 1)];\n    const result = player.receiveAttack(coordinates);\n    return result;\n  };\n\n  return {\n    play,\n    gameBoard\n  };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/computer-player.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\nconst Gameboard = () => {\n  const createBoard = () => {\n    const board = [];\n\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        board.push({\n          coordinates: [i, j],\n          ship: null,\n          hit: null\n        });\n      }\n    }\n\n    return board;\n  };\n\n  const board = createBoard();\n  const ships = [];\n\n  const createFleet = () => {\n    const destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"destroyer\", 2);\n    const submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"submarine\", 3);\n    const cruiser = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"cruiser\", 3);\n    const battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"battleship\", 4);\n    const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"carrier\", 5);\n    const ships = [destroyer, submarine, cruiser, battleship, carrier];\n    return ships;\n  };\n\n  const placeShips = () => {\n    const ships = createFleet();\n    let count = 0;\n\n    for (let i = 0; i < ships.length; i++) {\n      for (let j = 0; j < ships[i].length; j++) {\n        board[count + j].ship = ships[i];\n      }\n\n      count += 10;\n    }\n\n    return board;\n  };\n\n  const receiveAttack = coordinates => {\n    const targetSquare = board.find(square => JSON.stringify(coordinates) === JSON.stringify(square.coordinates));\n\n    if (targetSquare.ship) {\n      targetSquare.ship.hit();\n      targetSquare.hit = true;\n    } else targetSquare.hit = false;\n\n    return targetSquare;\n  };\n\n  const fleetSunk = () => {\n    let sunk = true;\n    if (ships.length === 0) sunk = false;\n\n    for (const ship of ships) {\n      if (ship.isSunk() === false) sunk = false;\n    }\n\n    return sunk;\n  };\n\n  return {\n    createBoard,\n    placeShips,\n    receiveAttack,\n    fleetSunk,\n    board,\n    ships\n  };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _computer_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer-player.js */ \"./src/modules/computer-player.js\");\n\n\n\nconst Player = () => {\n  const gameBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n  gameBoard.placeShips();\n\n  const play = coordinates => _computer_player_js__WEBPACK_IMPORTED_MODULE_1__.ComputerPlayer.board.receiveAttack(coordinates);\n\n  return {\n    play,\n    gameBoard\n  };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = (name, length) => {\n  let hitCount = 0;\n\n  const hit = () => ++hitCount;\n\n  const isSunk = () => {\n    if (hitCount === length) return true;else return false;\n  };\n\n  return {\n    name,\n    length,\n    hit,\n    isSunk\n  };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;