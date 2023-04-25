
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LaunchSceneNode extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public key: string = "";

	/* START-USER-CODE */

	// Write your code here.
	override execute(): void {

		this.scene.scene.launch(this.key);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
