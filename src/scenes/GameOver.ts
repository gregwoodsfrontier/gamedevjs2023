
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RestartButton from "../prefabs/RestartButton";
import BackToMainButton from "../prefabs/BackToMainButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// restart
		const restart = new RestartButton(this, 345, 236);
		this.add.existing(restart);

		// back
		const back = new BackToMainButton(this, 262, 236);
		this.add.existing(back);

		// text_1
		const text_1 = this.add.text(208.5, 160, "", {});
		text_1.text = "GAME OVER ...";
		text_1.setStyle({ "fontFamily": "'DynaPuff', cursive", "fontSize": "32px" });

		this.restart = restart;
		this.back = back;

		this.events.emit("scene-awake");
	}

	private restart!: RestartButton;
	private back!: BackToMainButton;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
