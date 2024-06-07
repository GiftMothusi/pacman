import { LEVEL, OBJECT_TYPE } from "./setup";

import GameBoard from "./GameBoard";

//DOM Elements
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

//Game Constants
const POWER_PILL_TIME = 1000; //ms
const GLOBAL_SPEED = 80; //ms

const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Initial Setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

//functions

function gameOver(pacman, grid) {}

function checkCollision(pacman, ghosts) {}

function gameLoop(pacman, ghosts) {}

function startGame() {}
