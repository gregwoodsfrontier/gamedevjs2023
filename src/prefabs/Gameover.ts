
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Gameover extends Phaser.Scene {

	constructor() {
		super("Gameover");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// gameoverText
		const gameoverText = this.add.text(90, 103, "", {});
		gameoverText.text = "Game Over...";
		gameoverText.setStyle({ "fontSize": "64px" });

		// contText
		const contText = this.add.text(147, 223, "", {});
		contText.text = "Hit C to main menu";
		contText.setStyle({ "fontSize": "32px" });

		this.gameoverText = gameoverText;
		this.contText = contText;

		this.events.emit("scene-awake");
	}

	private gameoverText!: Phaser.GameObjects.Text;
	private contText!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
