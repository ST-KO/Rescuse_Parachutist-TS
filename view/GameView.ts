import { Airplane } from "../model/Airplane.js";
import { Boat } from "../model/Boat.js";
import { Lives } from "../model/Lives.js";
import { Parachutist } from "../model/Parachutist.js";
import { Score } from "../model/Score.js";
import { Sea } from "../model/Sea.js";

export class GameView {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    imgParachutist: HTMLCanvasElement;
    
    airplane: Airplane;
    boat: Boat;
    sea: Sea;
    parachutists: Parachutist[];

    score: Score;
    lives: Lives;

    constructor(airplane: Airplane, boat: Boat, sea: Sea, parachutists: Parachutist[], score: Score, lives: Lives) {
        this.canvas  = document.getElementById("gameScreen") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.imgParachutist = document.getElementById("img_parachutist") as HTMLCanvasElement;

        this.airplane = airplane;
        this.boat = boat;
        this.sea = sea;
        this.parachutists = parachutists;

        this.score = score;
        this.lives = lives;
    }

    // Clear the canvas
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Draw the airplane on the canvas
    drawAirplane() {
        this.ctx.fillStyle = "#000"
        this.ctx.fillRect(this.airplane.position.x, this.airplane.position.y, this.airplane.width, this.airplane.height);
    }

    // Draw the boat on the canvas
    drawBoat() {
        this.ctx.fillStyle = "#000"
        this.ctx.fillRect(this.boat.position.x, this.boat.position.y, this.boat.width, this.boat.height);
    }

    // Draw the parachutist on the canvas
    drawParachutist() {
        for(const parachutist of this.parachutists) {
            if(!parachutist.shouldBeRemoved) {
                this.ctx.drawImage(this.imgParachutist, parachutist.position.x, parachutist.position.y, parachutist.size, parachutist.size);
            }
        }
    }

    // Draw sea on the canvas
    drawSea() {
        this.ctx.fillStyle = "#00f"
        this.ctx.fillRect(this.sea.position.x, this.sea.position.y, this.sea.width, this.sea.height);
    }

    // Draw Score
    showScore() {
        this.ctx.fillText(`Score: ${this.score.points}`, 10, 10);
    }

     // Draw Lives
    showLives() {
        this.ctx.fillText(`Lives: ${this.lives.lives}`, 10, 30);
    }

    render() {
        this.drawBoat();
        this.drawSea();
        this.drawParachutist();
        this.drawAirplane();

        this.showScore();
        this.showLives();
    }
}