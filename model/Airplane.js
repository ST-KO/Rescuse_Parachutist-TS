export class Airplane {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.position = { x: gameWidth, y: gameHeight / 7 };
        this.speed = 2;
        this.width = 100;
        this.height = 50;
    }
}
