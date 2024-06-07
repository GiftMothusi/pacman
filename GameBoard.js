import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from "./setup";

class GameBoard {
  ///To initialize an instance of a game
  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  //Method for showing game play status
  showGameStatus(gameWin) {
    const div = document.createElement("div");

    div.classList.add("game-status");
    div.innerHTML = `${gameWin ? "WIN!" : "GAME OVER!"}`;
    this.DOMGrid.appendChild(div);
  }

  //Method for creating gameBoard
  createGrid(level) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = "";
    this.DOMGrid.style.cssText = `grid-template-columns:repeat(${GRID_SIZE},${CELL_SIZE}px)`;

    level.forEach((square) => {
      const div = document.createElement("div");
      div.classList.add("square", CLASS_LIST[square]);
    });
  }
}
