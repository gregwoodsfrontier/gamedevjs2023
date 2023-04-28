
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PushOnClick extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if(this.gameObject) {
			this.gameObject.setInteractive().on("pointerdown", () => {
				this.scene.add.tween({
					targets: this.gameObject,
					scaleX: "*=0.8",
					scaleY: "*=0.8",
					duration: 80,
					yoyo: true,
				});
			});
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
