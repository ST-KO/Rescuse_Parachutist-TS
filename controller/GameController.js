import { BoatController } from "../controller/BoatController.js";
import { InputHandler } from "../controller/InputHandler.js";
import { LivesController } from "../controller/LivesController.js";
import { ParachutistController } from "../controller/ParachutistController.js";
import { ScoreController } from "../controller/ScoreController.js";
import { Airplane } from "../model/Airplane.js";
import { Boat } from "../model/Boat.js";
import { Lives } from "../model/Lives.js";
import { Parachutist } from "../model/Parachutist.js";
import { Score } from "../model/Score.js";
import { Sea } from "../model/Sea.js";
import { GameView } from "../view/GameView.js";
import { AirplaneController } from "./AirplaneController.js";
export class GameController {
    constructor(gameWidth, gameHeight) {
        this.GAME_WIDTH = gameWidth;
        this.GAME_HEIGHT = gameHeight;
        this.airplane = new Airplane(this.GAME_WIDTH, this.GAME_HEIGHT);
        this.boat = new Boat(this.GAME_WIDTH, this.GAME_HEIGHT);
        this.sea = new Sea(this.GAME_WIDTH, this.GAME_HEIGHT);
        this.parachutists = [];
        this.score = new Score();
        this.lives = new Lives();
        this.gameView = new GameView(this.airplane, this.boat, this.sea, this.parachutists, this.score, this.lives);
        this.boatController = new BoatController(this.boat);
        this.scoreController = new ScoreController(this.score);
        this.livesController = new LivesController(this.lives);
        this.parachutistController = new ParachutistController(this.parachutists, this.boat, this.sea, this.scoreController, this.livesController);
        this.airplaneController = new AirplaneController(this.GAME_WIDTH, this.GAME_HEIGHT);
        new InputHandler(this.boatController);
    }
    startGame() {
        this.gameLoop();
        this.spawnParachutist();
        this.spawnParachutist();
        this.spawnParachutist();
    }
    spawnParachutist() {
        const parachutist = new Parachutist();
        this.parachutists.push(parachutist);
    }
    gameLoop() {
        const animate = () => {
            this.gameView.clearCanvas();
            this.boatController.move();
            this.parachutistController.dropParachutist();
            this.airplaneController.move();
            this.gameView.render();
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }
}
