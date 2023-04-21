
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TimeBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 264, y ?? 207);

		// bar
		const bar = scene.add.rectangle(0, 0, 300, 24);
		bar.setOrigin(0, 0);
		bar.isFilled = true;
		bar.fillColor = 3024182;
		this.add(bar);

		// fill
		const fill = scene.add.rectangle(0, 0, 150, 24);
		fill.setOrigin(0, 0);
		fill.isFilled = true;
		fill.fillColor = 1375022;
		this.add(fill);

		// hourglass
		const hourglass = scene.add.image(-30, 13, "Play");
		this.add(hourglass);

		this.bar = bar;
		this.fill = fill;
		this.hourglass = hourglass;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private bar: Phaser.GameObjects.Rectangle;
	private fill: Phaser.GameObjects.Rectangle;
	private hourglass: Phaser.GameObjects.Image;
	public timer: number = 60;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
