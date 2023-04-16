
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DashState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public name: string = "dash";
	public speed: number = 0;
	public period: number = 1000;

	/* START-USER-CODE */

	// Write your code here.
	onEnter() {

	}

	onUpdate() {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
