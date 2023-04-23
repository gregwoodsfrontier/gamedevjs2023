
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SettingsButton from "../prefabs/SettingsButton";
import PlayButton from "../prefabs/PlayButton";
import FullScreenButton from "../prefabs/FullScreenButton";
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

		// background
		const background = this.add.image(320, 180, "Background");
		background.tintTopLeft = 16777215;
		background.tintTopRight = 16777215;
		background.tintBottomLeft = 10459071;
		background.tintBottomRight = 10459071;

		// settings_Button
		const settings_Button = new SettingsButton(this, 425, 215);
		this.add.existing(settings_Button);

		// placeHolderLogo
		const placeHolderLogo = this.add.image(318, 100, "PlaceHolderLogo");
		placeHolderLogo.scaleX = 0.25;
		placeHolderLogo.scaleY = 0.25;
		placeHolderLogo.visible = false;

		// playButton
		const playButton = new PlayButton(this, 215, 215);
		this.add.existing(playButton);

		// fullScreenButton
		const fullScreenButton = new FullScreenButton(this, 602, 321);
		this.add.existing(fullScreenButton);
		fullScreenButton.scaleX = 0.5;
		fullScreenButton.scaleY = 0.5;

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(92, 87, "StayPixel2", "Paper Dog Dash");
		bitmaptext_1.tintFill = true;
		bitmaptext_1.tintTopLeft = 15640095;
		bitmaptext_1.tintTopRight = 15640095;
		bitmaptext_1.tintBottomLeft = 12379672;
		bitmaptext_1.tintBottomRight = 12379672;
		bitmaptext_1.text = "Paper Dog Dash";
		bitmaptext_1.fontSize = 72;
		bitmaptext_1.dropShadowColor = 15573273;

		this.keyboard_key = keyboard_key;

		this.events.emit("scene-awake");
	}

	private keyboard_key!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// const theme = this.audioAddNode._g_audio

		// theme?.play()

		// this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {

		// 	theme?.destroy()
		// 	console.log('theme should be destroyed in main')
		// })
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here