
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
		const pauseText = this.add.text(331, 168, "", {});
		pauseText.setOrigin(0.5, 0.5);
		pauseText.text = "Pause";
		pauseText.setStyle({ "fontSize": "64px" });

		// contDesc
		const contDesc = this.add.text(328, 249, "", {});
		contDesc.setOrigin(0.5, 0.5);
		contDesc.text = "Hit C to resume";
		contDesc.setStyle({ "fontSize": "32px" });

		this.pauseText = pauseText;
		this.contDesc = contDesc;

		this.events.emit("scene-awake");
	}

	private pauseText!: Phaser.GameObjects.Text;
	private contDesc!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
