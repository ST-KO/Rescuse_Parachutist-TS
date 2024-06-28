export class BoatController {
    constructor(boat) {
        this.boat = boat;
        this.maxSpeed = 7,
            this.speed = 0;
    }
    moveLeft() {
        this.speed = -this.maxSpeed;
    }
    moveRight() {
        this.speed = +this.maxSpeed;
    }
    stopMovement() {
        this.speed = 0;
    }
    move() {
        this.boat.position.x += this.speed;
        // Preventing the boat from moving out of the game screen on the left side
        if (this.boat.position.x < 0) {
            this.boat.position.x = 0;
        }
        // Preventing the boat from moving out of the game screen on the right side
        if (this.boat.position.x + this.boat.width > this.boat.gameWidth) {
            this.boat.position.x = this.boat.gameWidth - this.boat.width;
        }
    }
}
