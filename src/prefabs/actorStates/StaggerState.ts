
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/ScriptNode";
import Phaser from "phaser";
import StateMachineNode from "../scriptNodes/StateMachineNode";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StaggerState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public name: string = "stagger`";
	public timer: number = 2000;

	/* START-USER-CODE */

	// Write your code here.
	onEnter() {
		// emit an event to play stagger anims
		this.scene.events.emit("play-stagger")

		this.scene.time.delayedCall(this.timer, () => {
			const machine = this.parent as StateMachineNode
			
			if(!machine.setState) {
				return
			}

			machine.setState('idle')
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
