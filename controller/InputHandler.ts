import { BoatController } from "./BoatController.js";

export class InputHandler {
    constructor(boatController: BoatController) {
        document.addEventListener("keydown", (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowLeft":
                    event.preventDefault();
                    boatController.moveLeft();
                    break;
                case "ArrowRight":
                    event.preventDefault();
                    boatController.moveRight();
                    break;
            }
        });

        document.addEventListener("keyup", (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowLeft":
                    event.preventDefault();
                    if (boatController.speed < 0) {
                        boatController.stopMovement();
                    }
                    break;
                case "ArrowRight":
                    event.preventDefault();
                    if (boatController.speed > 0) {
                        boatController.stopMovement();
                    }
                    break;
            }
        });
    }
}
