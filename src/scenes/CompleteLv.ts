
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import BackToMainButton from "../prefabs/BackToMainButton";
import ContButton from "../prefabs/ContButton";
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
		backToMainButton.scaleX = 4;
		backToMainButton.scaleY = 4;

		// shiba_attack0
		const shiba_attack0 = this.add.image(192, 123, "shiba_attack", 0);
		shiba_attack0.scaleX = 5;
		shiba_attack0.scaleY = 5;

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(326, 189, "StayPixel2", "Time: XX s");
		bitmaptext_2.visible = false;
		bitmaptext_2.text = "Time: XX s";
		bitmaptext_2.fontSize = 52;

		// contButton
		const contButton = new ContButton(this, 448, 305);
		this.add.existing(contButton);

		// banner
		const banner = this.add.image(320, 54, "Banner");
		banner.scaleX = 1.15;
		banner.scaleY = 1.15;

		// starContainer
		const starContainer = this.add.container(379, 167);
		starContainer.scaleX = 0.75;
		starContainer.scaleY = 0.75;

		// spritesheet_UI_Flat86
		const spritesheet_UI_Flat86 = this.add.image(95, 20, "Spritesheet_UI_Flat", 86);
		spritesheet_UI_Flat86.scaleX = 4;
		spritesheet_UI_Flat86.scaleY = 7;
		starContainer.add(spritesheet_UI_Flat86);

		// spritesheet_UI_Flat87
		const spritesheet_UI_Flat87 = this.add.image(252, 20, "Spritesheet_UI_Flat", 87);
		spritesheet_UI_Flat87.scaleX = 6;
		spritesheet_UI_Flat87.scaleY = 7;
		starContainer.add(spritesheet_UI_Flat87);

		// spritesheet_UI_Flat85
		const spritesheet_UI_Flat85 = this.add.image(-64, 20, "Spritesheet_UI_Flat", 85);
		spritesheet_UI_Flat85.scaleX = 6;
		spritesheet_UI_Flat85.scaleY = 7;
		starContainer.add(spritesheet_UI_Flat85);

		// greyStar
		const greyStar = new LevelStar(this, 0, 0, "yellowStar");
		greyStar.scaleX = 0.75;
		greyStar.scaleY = 0.75;
		starContainer.add(greyStar);

		// levelStar
		const levelStar = new LevelStar(this, 107, 0, "yellowStar");
		levelStar.scaleX = 0.75;
		levelStar.scaleY = 0.75;
		starContainer.add(levelStar);

		// levelStar_1
		const levelStar_1 = new LevelStar(this, 214, 0, "yellowStar");
		levelStar_1.scaleX = 0.75;
		levelStar_1.scaleY = 0.75;
		starContainer.add(levelStar_1);

		// lists
		const starGroup = [greyStar, levelStar, levelStar_1];

		this.greyStar = greyStar;
		this.starContainer = starContainer;
		this.starGroup = starGroup;

		this.events.emit("scene-awake");
	}

	private greyStar!: LevelStar;
	private starContainer!: Phaser.GameObjects.Container;
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
