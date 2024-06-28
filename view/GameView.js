export class GameView {
    constructor(airplane, boat, sea, parachutists, score, lives) {
        this.canvas = document.getElementById("gameScreen");
        this.ctx = this.canvas.getContext('2d');
        this.imgParachutist = document.getElementById("img_parachutist");
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
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(this.airplane.position.x, this.airplane.position.y, this.airplane.width, this.airplane.height);
    }
    // Draw the boat on the canvas
    drawBoat() {
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(this.boat.position.x, this.boat.position.y, this.boat.width, this.boat.height);
    }
    // Draw the parachutist on the canvas
    drawParachutist() {
        for (const parachutist of this.parachutists) {
            if (!parachutist.shouldBeRemoved) {
                this.ctx.drawImage(this.imgParachutist, parachutist.position.x, parachutist.position.y, parachutist.size, parachutist.size);
            }
        }
    }
    // Draw sea on the canvas
    drawSea() {
        this.ctx.fillStyle = "#00f";
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
