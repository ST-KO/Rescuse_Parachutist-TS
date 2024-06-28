export class Parachutist {
    position: {x: number, y: number};
    speed: {x: number, y: number};
    size: number;
    randomXPosition: number;
    shouldBeRemoved: boolean;

    constructor() {

        // Random x position from 10 to 500
        this.randomXPosition = Math.floor(Math.random() * 500) + 10;

        this.position = {
            x: this.randomXPosition,
            y: 10
        }

        this.speed ={ x: 2, y: 2 };

        this.size = 100;

        this.shouldBeRemoved = false;

    }

}   