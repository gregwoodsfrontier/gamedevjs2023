
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ArrowCursors extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

	awake() {
		const { scene } = this

		if(!scene || !scene.input.keyboard) { return }

		if(!this.cursors) {
			this.cursors = scene?.input.keyboard?.createCursorKeys()
		}
	}

	get getCursors() {
		return this.cursors
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
