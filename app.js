import { GameController } from "./controller/GameController.js";
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const gameController = new GameController(GAME_WIDTH, GAME_HEIGHT);
gameController.startGame();
