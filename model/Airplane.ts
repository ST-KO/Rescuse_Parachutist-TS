export class Airplane {
    position: { x: number, y: number };
    speed: number;
    gameWidth: number;
    width: number;
    height: number;

    constructor(gameWidth: number, gameHeight: number) {
        this.gameWidth = gameWidth;
        this.position = { x: gameWidth, y: gameHeight / 7 };
        this.speed = 2;
        this.width = 100;
        this.height = 50;
    }

}