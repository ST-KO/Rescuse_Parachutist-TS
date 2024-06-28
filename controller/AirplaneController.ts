import { Airplane } from "../model/Airplane.js";

export class AirplaneController {
    airplane: Airplane;

    constructor(gameWidth: number, gameHeight: number) {
        this.airplane = new Airplane(gameWidth, gameHeight);
    }

    move() {
        // Move the airplane to the left
        this.airplane.position.x -= this.airplane.speed;

        // If the airplane has moved past the left edge of the screen
        if (this.airplane.position.x < -this.airplane.width) {
            // Reposition it to the right edge of the screen
            this.airplane.position.x = this.airplane.gameWidth;
        }
    }
}
