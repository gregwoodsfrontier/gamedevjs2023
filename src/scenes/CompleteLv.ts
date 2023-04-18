
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LevelStar from "../prefabs/LevelStar";
import RestartButton from "../prefabs/RestartButton";
import BackToMainButton from "../prefabs/BackToMainButton";
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

		// text_1
		const text_1 = this.add.text(326, 140, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Level Complete";
		text_1.setStyle({ "fontSize": "64px" });

		// greyStar
		const greyStar = new LevelStar(this, 207, 235);
		this.add.existing(greyStar);
		greyStar.scaleX = 0.75;
		greyStar.scaleY = 0.75;

		// levelStar
		const levelStar = new LevelStar(this, 314, 235);
		this.add.existing(levelStar);
		levelStar.scaleX = 0.75;
		levelStar.scaleY = 0.75;

		// levelStar_1
		const levelStar_1 = new LevelStar(this, 421, 235);
		this.add.existing(levelStar_1);
		levelStar_1.scaleX = 0.75;
		levelStar_1.scaleY = 0.75;

		// restartButton
		const restartButton = new RestartButton(this, 590, 51.5);
		this.add.existing(restartButton);
		restartButton.scaleX = 3;
		restartButton.scaleY = 3;

		// backToMainButton
		const backToMainButton = new BackToMainButton(this, 57, 51.5);
		this.add.existing(backToMainButton);
		backToMainButton.scaleX = 3;
		backToMainButton.scaleY = 3;

		// lists
		const starGroup = [greyStar, levelStar, levelStar_1];

		this.greyStar = greyStar;
		this.starGroup = starGroup;

		this.events.emit("scene-awake");
	}

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
