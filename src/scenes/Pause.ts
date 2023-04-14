
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
		const pauseText = this.add.text(329, 117, "", {});
		pauseText.setOrigin(0.5, 0.5);
		pauseText.text = "Pause";
		pauseText.setStyle({ "fontSize": "64px" });

		// contDesc
		const contDesc = this.add.text(328, 249, "", {});
		contDesc.setOrigin(0.5, 0.5);
		contDesc.text = "Hit C to resume";
		contDesc.setStyle({ "fontSize": "32px" });

		// play
		const play = this.add.image(325, 188, "Play");

		this.pauseText = pauseText;
		this.contDesc = contDesc;
		this.play = play;

		this.events.emit("scene-awake");
	}

	private pauseText!: Phaser.GameObjects.Text;
	private contDesc!: Phaser.GameObjects.Text;
	private play!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.play.once('pointerup', this.resumeLevel)
	}

	resumeLevel() {
		this.scene.stop()
		this.scene.resume("Level")
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
