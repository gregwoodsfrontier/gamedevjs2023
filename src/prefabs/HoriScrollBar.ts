
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HoriScrollBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -37.11756271844499);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 0, 160, 16);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 16027177;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 4184966;
		rectangle_1.lineWidth = 2;
		this.add(rectangle_1);

		// ellipse_1
		const ellipse_1 = scene.add.ellipse(0, 0, 16, 32);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 2807497;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 6174891;
		this.add(ellipse_1);

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
