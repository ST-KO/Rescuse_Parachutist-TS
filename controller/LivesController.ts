import { Lives } from "../model/Lives";

export class LivesController {
    lives: Lives

    constructor(lives: Lives) {
        this.lives = lives;
    }

    reduceLives(live: number) {
        this.lives.lives -= live;

        if(this.lives.lives <= 0){
            this.triggerGameOver();
        }
    }

    triggerGameOver() {
        alert("Game Over!");
    }
}