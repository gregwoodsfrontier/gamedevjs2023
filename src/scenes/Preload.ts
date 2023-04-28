
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../prefabs/scriptNodes/PreloadText";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// progress
		const progress = this.add.text(320, 300, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// preloadText
		new PreloadText(progress);

		// walk0
		const walk0 = this.add.sprite(340, 110, "Walk", 0);
		walk0.scaleX = 5;
		walk0.scaleY = 5;

		this.walk0 = walk0;

		this.events.emit("scene-awake");
	}

	private walk0!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.walk0.play("dog-walk")

		this.load.pack("asset-pack", "assets/asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Controller"));

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
