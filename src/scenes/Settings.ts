
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import HoriScrollBar from "../prefabs/HoriScrollBar";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Settings extends Phaser.Scene {

	constructor() {
		super("Settings");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// title
		const title = this.add.text(235, 25, "", {});
		title.text = "Settings";
		title.setStyle({ "fontSize": "32px" });

		// back
		const back = this.add.image(595, 44, "Back");
		back.scaleX = 3;
		back.scaleY = 3;

		// musicText
		const musicText = this.add.text(71, 109, "", {});
		musicText.text = "Music Volume";

		// seText
		const seText = this.add.text(68, 162, "", {});
		seText.text = "Sound Effect Volume";

		// scrollbar_1
		const scrollbar_1 = new HoriScrollBar(this, 462, 113);
		this.add.existing(scrollbar_1);

		// scrollbar
		const scrollbar = new HoriScrollBar(this, 462, 170);
		this.add.existing(scrollbar);

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
