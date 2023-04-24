
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Gameover extends Phaser.Scene {

	constructor() {
		super("Gameover");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bg
		const bg = this.add.rectangle(-2.500000000000057, 0, 128, 128);
		bg.scaleX = 5.039062500000001;
		bg.scaleY = 2.8515625;
		bg.setOrigin(0, 0);
		bg.isFilled = true;
		bg.fillColor = 1911635;

		// title
		const title = this.add.bitmapText(320, 80, "StayPixel2", "one more time??");
		title.scaleX = 0.9910714285714286;
		title.setOrigin(0.5, 0.5);
		title.tintFill = true;
		title.tintTopLeft = 16773608;
		title.tintTopRight = 16773608;
		title.tintBottomLeft = 16773608;
		title.tintBottomRight = 16773608;
		title.text = "one more time??";
		title.fontSize = 72;
		title.letterSpacing = 2;

		// shadow
		const shadow = this.add.ellipse(304, 304, 128, 128);
		shadow.scaleX = 1.84375;
		shadow.scaleY = 0.5312500000000004;
		shadow.isFilled = true;
		shadow.fillColor = 12764103;

		// gameoverDog
		const gameoverDog = this.add.sprite(320, 192, "shiba_death", 0);
		gameoverDog.scaleX = 5;
		gameoverDog.scaleY = 5;

		this.gameoverDog = gameoverDog;

		this.events.emit("scene-awake");
	}

	private gameoverDog!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
