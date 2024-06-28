export class InputHandler {
    constructor(boatController) {
        document.addEventListener("keydown", (event) => {
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
        document.addEventListener("keyup", (event) => {
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
