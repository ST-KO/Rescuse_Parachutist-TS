export class Sea {
    width: number;
    height: number;
    position: {x: number, y: number};

    constructor(gameWidth: number, gameHeight: number) {
        this.width = gameWidth;
        this.height = 60;

        this.position = {
            x: 0, // The sea spans the entire width of the game screen
            y: gameHeight - this.height, // Positioned at the bottom of the game screen
        }
    }
}