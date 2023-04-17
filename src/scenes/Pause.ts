
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RestartButton from "../prefabs/RestartButton";
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
		const play = this.add.image(248, 184, "Play");
		play.scaleX = 3;
		play.scaleY = 3;

		// restartButton
		const restartButton = new RestartButton(this, 395, 184);
		this.add.existing(restartButton);
		restartButton.scaleX = 3;
		restartButton.scaleY = 3;

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
