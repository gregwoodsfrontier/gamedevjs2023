
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import TimeBar from "../prefabs/TimeBar";
import BackToMainButton from "../prefabs/BackToMainButton";
import RestartButton from "../prefabs/RestartButton";
import PauseButton from "../prefabs/PauseButton";
/* START-USER-IMPORTS */
import eventsCenter from "../eventCenter";
import { PAUSE_GAME, RESUME_GAME } from "../prefabs/scriptNodes/onPauseScreenNode";
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

		// restartButton
		const restartButton = new RestartButton(this, 608, 34);
		this.add.existing(restartButton);
		restartButton.scaleX = 2;
		restartButton.scaleY = 2;

		// pause
		const pause = new PauseButton(this, 556, 34);
		this.add.existing(pause);
		pause.scaleX = 2;
		pause.scaleY = 2;

		// lists
		const thingsToHide = [backToMainButton, timeBar, restartButton];

		// timeBar (prefab fields)
		timeBar.timer = 2;

		this.thingsToHide = thingsToHide;

		this.events.emit("scene-awake");
	}

	private thingsToHide!: Array<BackToMainButton|TimeBar|RestartButton>;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		eventsCenter.on(PAUSE_GAME, () => {
			this.thingsToHide.forEach(e => {
				e.setActive(false)
				e.setVisible(false)
			})
		})

		eventsCenter.on(RESUME_GAME, () => {
			this.thingsToHide.forEach(e => {
				e.setActive(true)
				e.setVisible(true)
			})
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
