
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import TimeBar from "../prefabs/TimeBar";
import BackToMainButton from "../prefabs/BackToMainButton";
import FullScreenButton from "../prefabs/FullScreenButton";
import RestartButton from "../prefabs/RestartButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UIScreen extends Phaser.Scene {

	constructor() {
		super("UIScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// timeBar
		const timeBar = new TimeBar(this, 190.25, 30);
		this.add.existing(timeBar);

		// backToMainButton
		const backToMainButton = new BackToMainButton(this, 39, 40);
		this.add.existing(backToMainButton);
		backToMainButton.scaleX = 3;
		backToMainButton.scaleY = 3;

		// fullScreenButton
		const fullScreenButton = new FullScreenButton(this, 594, 314);
		this.add.existing(fullScreenButton);
		fullScreenButton.scaleX = 0.72;
		fullScreenButton.scaleY = 0.72;

		// restartButton
		const restartButton = new RestartButton(this, 595, 52);
		this.add.existing(restartButton);
		restartButton.scaleX = 3.4285714285714284;
		restartButton.scaleY = 3.272727272727273;

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
