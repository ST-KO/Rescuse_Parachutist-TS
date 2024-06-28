export class Sea {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth;
        this.height = 60;
        this.position = {
            x: 0, // The sea spans the entire width of the game screen
            y: gameHeight - this.height, // Positioned at the bottom of the game screen
        };
    }
}
