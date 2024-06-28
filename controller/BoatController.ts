import { Boat } from "../model/Boat.js";

export class BoatController {
    boat: Boat;
    maxSpeed: number;
    speed: number;

    constructor(boat: Boat) {
        this.boat = boat;
        this.maxSpeed = 7,
        this.speed = 0;
    }

    moveLeft(): void {
        this.speed = -this.maxSpeed;
    }

    moveRight(): void {
        this.speed = +this.maxSpeed;
    }

    stopMovement(): void {
        this.speed = 0;
    }

    move(): void {

        this.boat.position.x += this.speed;

        // Preventing the boat from moving out of the game screen on the left side
        if(this.boat.position.x < 0) {
            this.boat.position.x = 0;
        }

        // Preventing the boat from moving out of the game screen on the right side
        if(this.boat.position.x + this.boat.width > this.boat.gameWidth) {
            this.boat.position.x = this.boat.gameWidth - this.boat.width;
        }
    }
}