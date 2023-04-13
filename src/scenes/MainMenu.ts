
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SettingsButton from "../prefabs/SettingsButton";
import PlayButton from "../prefabs/PlayButton";
import FullScreenButton from "../prefabs/FullScreenButton";
import ScrollBar from "../prefabs/ScrollBar";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorPreload(): void {

		this.load.pack("preload-asset-pack", "assets/preload-asset-pack.json");
	}

	editorCreate(): void {

		// keyboard_key
		const keyboard_key = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// settings_Button
		const settings_Button = new SettingsButton(this, 425, 215);
		this.add.existing(settings_Button);

		// placeHolderLogo
		const placeHolderLogo = this.add.image(318, 100, "PlaceHolderLogo");
		placeHolderLogo.scaleX = 0.25;
		placeHolderLogo.scaleY = 0.25;

		// playButton
		const playButton = new PlayButton(this, 215, 215);
		this.add.existing(playButton);

		// fullScreenButton
		const fullScreenButton = new FullScreenButton(this, 622, 342);
		this.add.existing(fullScreenButton);

		// scrollBar
		const scrollBar = new ScrollBar(this, 488, 338);
		this.add.existing(scrollBar);

		this.keyboard_key = keyboard_key;

		this.events.emit("scene-awake");
	}

	private keyboard_key!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here