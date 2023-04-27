
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RestartLevelNode extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public sceneKey: string = "Level";

	/* START-USER-CODE */

	// Write your code here.
	execute(): void {
		this.restartLevel(this.sceneKey)
	}

	restartLevel(key: string) {
		const currentLv = this.scene.scene.get(key)
		currentLv.scene.stop()
		currentLv.scene.start()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
