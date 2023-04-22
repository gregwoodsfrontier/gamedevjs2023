
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
		pauseText.fontSize = 60;
		pauseText.dropShadowX = 5;
		pauseText.dropShadowY = 2;
		pauseText.dropShadowColor = 11227702;

		// contDesc
		const contDesc = this.add.bitmapText(320, 237, "StayPixel2", "Hit C to resume");
		contDesc.setOrigin(0.5, 0.5);
		contDesc.tintFill = true;
		contDesc.tintTopLeft = 16753408;
		contDesc.tintTopRight = 16753408;
		contDesc.tintBottomLeft = 16753408;
		contDesc.tintBottomRight = 16753408;
		contDesc.text = "Hit C to resume";
		contDesc.fontSize = 40;
		contDesc.dropShadowX = 5;
		contDesc.dropShadowY = 5;
		contDesc.dropShadowColor = 11227702;

		this.pauseText = pauseText;
		this.contDesc = contDesc;

		this.events.emit("scene-awake");
	}

	private pauseText!: Phaser.GameObjects.BitmapText;
	private contDesc!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// this.play.once('pointerup', this.resumeLevel)
	}

	resumeLevel() {
		this.scene.stop()
		this.scene.resume("Level")
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
