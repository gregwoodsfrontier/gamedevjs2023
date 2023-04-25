
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Pause extends Phaser.Scene {

	constructor() {
		super("Pause");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// pauseText
		const pauseText = this.add.bitmapText(320, 175, "StayPixel2", "Pause");
		pauseText.setOrigin(0.5, 0.5);
		pauseText.tintFill = true;
		pauseText.tintTopLeft = 16753408;
		pauseText.tintTopRight = 16753408;
		pauseText.tintBottomLeft = 16753408;
		pauseText.tintBottomRight = 16753408;
		pauseText.text = "Pause";
		pauseText.fontSize = 84;
		pauseText.dropShadowX = 5;
		pauseText.dropShadowY = 2;
		pauseText.dropShadowColor = 11227702;

		this.pauseText = pauseText;

		this.events.emit("scene-awake");
	}

	private pauseText!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
