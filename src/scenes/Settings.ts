
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import HoriScrollBar from "../prefabs/HoriScrollBar";
import BackToMainButton from "../prefabs/BackToMainButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Settings extends Phaser.Scene {

	constructor() {
		super("Settings");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(320, 180, "Background");
		background.tintTopLeft = 16777215;
		background.tintTopRight = 16777215;
		background.tintBottomLeft = 9934743;
		background.tintBottomRight = 9934743;

		// seText
		const seText = this.add.bitmapText(62, 160, "StayPixel2", "Sound Effect Volume\n");
		seText.tintFill = true;
		seText.text = "Sound Effect Volume\n";
		seText.fontSize = 26;

		// musicText
		const musicText = this.add.bitmapText(93, 102, "StayPixel2", "Music Volume\n");
		musicText.tintFill = true;
		musicText.text = "Music Volume\n";
		musicText.fontSize = 26;

		// title
		const title = this.add.bitmapText(216, 16, "StayPixel2", "Settings\n");
		title.tintFill = true;
		title.tintTopLeft = 15640095;
		title.tintTopRight = 15640095;
		title.tintBottomLeft = 12379672;
		title.tintBottomRight = 12379672;
		title.text = "Settings\n";
		title.fontSize = 60;

		// scrollbar_1
		const scrollbar_1 = new HoriScrollBar(this, 462, 113);
		this.add.existing(scrollbar_1);

		// scrollbar
		const scrollbar = new HoriScrollBar(this, 462, 170);
		this.add.existing(scrollbar);

		// backToMainButton
		const backToMainButton = new BackToMainButton(this, 32, 32);
		this.add.existing(backToMainButton);
		backToMainButton.scaleX = 2;
		backToMainButton.scaleY = 2;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
