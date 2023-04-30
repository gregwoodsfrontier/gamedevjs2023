
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AddPhysicsToTileLayer extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if(this.gameObject && this.gameObject instanceof Phaser.Tilemaps.TilemapLayer)
		{
			this.gameObject.setCollisionByProperty({ collides: true });
		}
	}

	debugPhysics () {
		if(!this.gameObject || !(this.gameObject instanceof Phaser.Tilemaps.TilemapLayer)) {
			return
		}

		const debugGraphics = this.gameObject.scene.add.graphics().setAlpha(0.75);
		this.gameObject.renderDebug(debugGraphics, {
		  tileColor: null, // Color of non-colliding tiles
		  collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
		  faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
