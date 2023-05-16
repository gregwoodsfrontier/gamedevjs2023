
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ArcadePhyBody extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public allowGrav: boolean = true;
	public bodyWidth!: number;
	public bodyHeight: number = 0;
	public offsetX: number = 0;
	public offsetY: number = 0;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if( this.gameObject ) {
			const { allowGrav, bodyWidth, bodyHeight, offsetX, offsetY } = this

			this.scene.physics.world.enable(this.gameObject);
			(this.gameObject.body as Phaser.Physics.Arcade.Body)
			.setAllowGravity(allowGrav)
			.setSize(bodyWidth, bodyHeight)
			.setOffset(offsetX, offsetY)
			// .setOffset(this.sprite.body.offset.x - this.sprite.body.width - 2, this.sprite.body.offset.y - this.sprite.body.height - 3)
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
