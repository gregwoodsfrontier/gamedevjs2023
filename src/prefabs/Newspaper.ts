
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Newspaper extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -1);

		// newspaper
		const newspaper = scene.add.sprite(0, 1, "newspaper");
		this.add(newspaper);

		// matterBody
		const matterBody = scene.add.rectangle(0, 1, 16, 16);
		matterBody.scaleX = 0.75;
		matterBody.scaleY = 0.75;
		matterBody.isFilled = true;
		matterBody.fillAlpha = 0.3;
		this.add(matterBody);

		this.matterBody = matterBody;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private matterBody: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
