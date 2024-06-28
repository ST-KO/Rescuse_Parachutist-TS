export class ScoreController {
    constructor(score) {
        this.score = score;
    }
    addPoints(points) {
        this.score.points += points;
    }
}
