import { Airplane } from "../model/Airplane.js";
export class AirplaneController {
    constructor(gameWidth, gameHeight) {
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
