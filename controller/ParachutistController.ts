import { Boat } from "../model/Boat.js";
import { Parachutist } from "../model/Parachutist.js";
import { Sea } from "../model/Sea.js";
import { LivesController } from "./LivesController.js";
import { ScoreController } from "./ScoreController.js";

export class ParachutistController {
    parachutists: Parachutist[];
    boat: Boat;
    sea: Sea;
    
    scoreController: ScoreController;
    livesController: LivesController;

    spawnTimer: any;

    constructor(parachutists: Parachutist[], boat: Boat, sea: Sea,scoreController: ScoreController, livesController: LivesController) {
        this.parachutists = parachutists;
        this.boat = boat;
        this.sea = sea;

        this.scoreController = scoreController;
        this.livesController = livesController;
    }
    
    dropParachutist() {
        for(const parachutist of this.parachutists) {
            parachutist.position.y += parachutist.speed.y;

            this.fallToSea(parachutist);

            this.collectedByBoat(parachutist);
        }

        this.parachutists = this.parachutists.filter(p => !p.shouldBeRemoved);

    }
    
    // Checking collision with the sea
    fallToSea(parachutist: Parachutist) {
        if(parachutist.position.y + parachutist.size > (this.boat.gameHeight - this.sea.height)) {
            this.livesController.reduceLives(1);
            parachutist.shouldBeRemoved = true;
        }
    }

     // Checking collision with boat
    collectedByBoat(parachutist: Parachutist) {
        
         let bottomOfParachutist = parachutist.position.y + parachutist.size;
         let topOfBoat = this.boat.position.y;
         let leftSideOfBoat = this.boat.position.x;
         let rightSideOfBoat = this.boat.position.x + this.boat.width;
 
         if(bottomOfParachutist >= topOfBoat && 
             parachutist.position.x >= leftSideOfBoat &&
             parachutist.position.x <= rightSideOfBoat
         ) { 
             this.scoreController.addPoints(1);
             parachutist.shouldBeRemoved = true;
         }   
    }
}