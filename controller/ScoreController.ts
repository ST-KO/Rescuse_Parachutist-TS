import { Score } from "../model/Score";

export class ScoreController {
    score: Score

    constructor(score: Score) {
        this.score = score;
    }

    addPoints(points: number) {
        this.score.points += points;
    }
}