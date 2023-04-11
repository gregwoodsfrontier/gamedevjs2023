
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
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
		const keyboard_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// play_Button
		const play_Button = this.add.image(215, 215, "Play Button");
		play_Button.scaleX = 0.25;
		play_Button.scaleY = 0.25;

		// settings_Button
		const settings_Button = this.add.image(425, 215, "Settings Button");
		settings_Button.scaleX = 0.25;
		settings_Button.scaleY = 0.25;

		// fullscreen
		const fullscreen = this.add.image(620, 340, "fullscreen");
		fullscreen.scaleX = 0.25;
		fullscreen.scaleY = 0.25;

		// placeHolderLogo
		const placeHolderLogo = this.add.image(318, 100, "PlaceHolderLogo");
		placeHolderLogo.scaleX = 0.25;
		placeHolderLogo.scaleY = 0.25;

		this.keyboard_key = keyboard_key;

		this.events.emit("scene-awake");
	}

	private keyboard_key!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here

	create() {
 		this.input.once('pointerdown', () => {

            this.scene.start('Level');

        }, this);
		
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
