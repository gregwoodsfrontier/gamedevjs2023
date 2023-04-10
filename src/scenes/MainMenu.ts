
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayButton from "../prefabs/PlayButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// title
		const title = this.add.text(111.5, 154, "", {});
		title.text = "Gamedevjs 2023 \nGame Jam Title";
		title.setStyle({ "fontSize": "64px" });

		// playButton
		const playButton = new PlayButton(this, 400, 369);
		this.add.existing(playButton);

		this.title = title;
		this.playButton = playButton;

		this.events.emit("scene-awake");
	}

	private title!: Phaser.GameObjects.Text;
	private playButton!: PlayButton;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
