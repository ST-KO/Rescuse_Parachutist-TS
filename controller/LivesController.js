export class LivesController {
    constructor(lives) {
        this.lives = lives;
    }
    reduceLives(live) {
        this.lives.lives -= live;
        if (this.lives.lives <= 0) {
            this.triggerGameOver();
        }
    }
    triggerGameOver() {
        alert("Game Over!");
    }
}
