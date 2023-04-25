
// You can write more code here

/* START OF COMPILED CODE */


import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import eventsCenter from "../../eventCenter";
/* END-USER-IMPORTS */

export default class ChangeStateInController extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public SMState: "main-menu"|"settings"|"level"|"pause"|"restart"|"complete" = "main-menu";

	/* START-USER-CODE */

	// Write your code here.
	execute() {
		
		// const controller = this.scene.scene.get("Controller")

		// controller.events.emit("change-state", this.SMState)
		eventsCenter.emit("change-game-state", this.SMState)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
