
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnKeyBoardJustDownScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public keyBoardKey!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here.
	protected override update(): void {

		if (!this.keyBoardKey) {

			return;
		}

		if(Phaser.Input.Keyboard.JustDown(this.keyBoardKey))
		{
			this.executeChildren();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
