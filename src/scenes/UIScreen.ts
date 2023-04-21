
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
		const timeBar = new TimeBar(this, 192, 32);
		this.add.existing(timeBar);

		// backToMainButton
		const backToMainButton = new BackToMainButton(this, 32, 32);
		this.add.existing(backToMainButton);
		backToMainButton.scaleX = 2;
		backToMainButton.scaleY = 2;

		// fullScreenButton
		const fullScreenButton = new FullScreenButton(this, 603, 320);
		this.add.existing(fullScreenButton);
		fullScreenButton.scaleX = 0.5;
		fullScreenButton.scaleY = 0.5;

		// restartButton
		const restartButton = new RestartButton(this, 608, 32);
		this.add.existing(restartButton);
		restartButton.scaleX = 2;
		restartButton.scaleY = 2;

		// timeBar (prefab fields)
		timeBar.timer = 30;

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
