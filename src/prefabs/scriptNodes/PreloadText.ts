
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PreloadText extends ScriptNode {

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
			this.scene.load.on(Phaser.Loader.Events.PROGRESS, (p: number) => {
				if(this.gameObject && this.gameObject instanceof Phaser.GameObjects.Text) {
					this.gameObject.text = Math.floor(p * 100) + "%";
				}
			});
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
