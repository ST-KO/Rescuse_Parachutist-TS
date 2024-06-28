export class Boat {
    width: number;
    height: number;
    gameWidth: number;
    gameHeight: number;
    position: {x: number, y: number};

    constructor(gameWidth: number, gameHeight: number) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 200;
        this.height = 30;

        this.position = {
            x: gameWidth / 2 - this.width /2,
            y: gameHeight - this.height - 60
        }
    }
}