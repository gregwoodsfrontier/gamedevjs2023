
// You can write more code here

/* START OF COMPILED CODE */

import OnEventScript from "./OnEventScript";
import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class onValueChangeNode extends OnEventScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// this (prefab fields)
		this.eventName = "valuechange";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	override awake(): void {

		if (!this.gameObject) {

			return;
		}

		super.awake();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
