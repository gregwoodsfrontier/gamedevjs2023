
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CameraBounds extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public x: number = 0;
	public y: number = 0;
	public boundWidth: number = 0;
	public boundHeight: number = 0;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		const { scene, x, y, boundWidth, boundHeight } = this
		
		scene.cameras.main.setBounds(x, y, boundWidth, boundHeight)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
