
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import BackToMainButton from "../prefabs/BackToMainButton";
import LevelStar from "../prefabs/LevelStar";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CompleteLv extends Phaser.Scene {

	constructor() {
		super("CompleteLv");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 700, 400);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 16764074;

		// backToMainButton
		const backToMainButton = new BackToMainButton(this, 173, 306);
		this.add.existing(backToMainButton);
		backToMainButton.scaleX = 3;
		backToMainButton.scaleY = 3;

		// starContainer
		const starContainer = this.add.container(352, 132);
		starContainer.scaleX = 0.75;
		starContainer.scaleY = 0.75;

		// greyStar
		const greyStar = new LevelStar(this, 0, 0);
		greyStar.scaleX = 0.75;
		greyStar.scaleY = 0.75;
		starContainer.add(greyStar);

		// levelStar
		const levelStar = new LevelStar(this, 107, 0);
		levelStar.scaleX = 0.75;
		levelStar.scaleY = 0.75;
		starContainer.add(levelStar);

		// levelStar_1
		const levelStar_1 = new LevelStar(this, 214, 0);
		levelStar_1.scaleX = 0.75;
		levelStar_1.scaleY = 0.75;
		starContainer.add(levelStar_1);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(44, 42, "StayPixel2", "Local good boy delivers newspaper!");
		bitmaptext_1.text = "Local good boy delivers newspaper!";
		bitmaptext_1.fontSize = 38;

		// shiba_attack0
		const shiba_attack0 = this.add.image(200, 121, "shiba_attack", 0);
		shiba_attack0.scaleX = 5;
		shiba_attack0.scaleY = 5;

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(326, 189, "StayPixel2", "Time: XX s");
		bitmaptext_2.text = "Time: XX s";
		bitmaptext_2.fontSize = 52;

		// continue
		const continue = this.add.image(448, 305, "Continue");
		continue.scaleX = 0.7;
		continue.scaleY = 0.7;

		// banner
		const banner = this.add.image(320, 54, "Banner");
		banner.scaleX = 1.15;
		banner.scaleY = 1.15;

		// lists
		const starGroup = [greyStar, levelStar, levelStar_1];

		this.starContainer = starContainer;
		this.greyStar = greyStar;
		this.starGroup = starGroup;

		this.events.emit("scene-awake");
	}

	private starContainer!: Phaser.GameObjects.Container;
	private greyStar!: LevelStar;
	private starGroup!: LevelStar[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
