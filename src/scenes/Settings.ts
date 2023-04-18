
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "../prefabs/scriptNodes/OnPointerDownScript";
import StartSceneActionScript from "../prefabs/scriptNodes/StartSceneActionScript";
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

		// back
		const back = this.add.image(595, 46, "Back");
		back.scaleX = 3;
		back.scaleY = 3;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(back);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(onPointerDownScript);

		// seText
		const seText = this.add.bitmapText(62, 160, "StayPixel2", "Sound Effect Volume\n");
		seText.tintFill = true;
		seText.text = "Sound Effect Volume\n";
		seText.fontSize = 26;

		// musicText
		const musicText = this.add.bitmapText(93, 102, "StayPixel2", "Music Volume\n");
		musicText.tintFill = true;
		musicText.text = "Music Volume\n";
		musicText.fontSize = 26;

		// title
		const title = this.add.bitmapText(216, 16, "StayPixel2", "Settings\n");
		title.tintFill = true;
		title.tintTopLeft = 15640095;
		title.tintTopRight = 15640095;
		title.tintBottomLeft = 12379672;
		title.tintBottomRight = 12379672;
		title.text = "Settings\n";
		title.fontSize = 60;

		// scrollbar_1
		const scrollbar_1 = new HoriScrollBar(this, 462, 113);
		this.add.existing(scrollbar_1);

		// scrollbar
		const scrollbar = new HoriScrollBar(this, 462, 170);
		this.add.existing(scrollbar);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "MainMenu";

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
