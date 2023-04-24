
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Goal {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Goal extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "house2", frame);

		this.scaleX = 2;
		this.scaleY = 2;
		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.setOffset(15, 16);
		this.body.setSize(18, 33, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
