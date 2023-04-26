
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import HoriScrollBar from "../prefabs/HoriScrollBar";
import onValueChangeNode from "../prefabs/scriptNodes/onValueChangeNode";
import setAudioVolume from "../prefabs/scriptNodes/setAudioVolume";
import BackToMainButton from "../prefabs/BackToMainButton";
/* START-USER-IMPORTS */
import { ScrollBar } from "phaser3-rex-plugins/templates/ui/ui-components";
import eventsCenter from "../eventCenter";
/* END-USER-IMPORTS */

export default class Settings extends Phaser.Scene {

	constructor() {
		super("Settings");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(320, 180, "Background");
		background.tintTopLeft = 16777215;
		background.tintTopRight = 16777215;
		background.tintBottomLeft = 9934743;
		background.tintBottomRight = 9934743;

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

		// musicBar
		const musicBar = new HoriScrollBar(this, 462, 113);
		this.add.existing(musicBar);

		// onValueChangeNode_music
		const onValueChangeNode_music = new onValueChangeNode(musicBar);

		// setAudioVolume_music
		new setAudioVolume(onValueChangeNode_music);

		// sfxBar
		const sfxBar = new HoriScrollBar(this, 462, 170);
		this.add.existing(sfxBar);

		// onValueChangeNode_sfx
		const onValueChangeNode_sfx = new onValueChangeNode(sfxBar);

		// setAudioVolume_sfx
		const setAudioVolume_sfx = new setAudioVolume(onValueChangeNode_sfx);

		// backToMainButton
		const backToMainButton = new BackToMainButton(this, 32, 32);
		this.add.existing(backToMainButton);
		backToMainButton.scaleX = 2;
		backToMainButton.scaleY = 2;

		// setAudioVolume_sfx (prefab fields)
		setAudioVolume_sfx.gameAudioType = "sfx";

		this.onValueChangeNode_music = onValueChangeNode_music;
		this.musicBar = musicBar;
		this.onValueChangeNode_sfx = onValueChangeNode_sfx;
		this.sfxBar = sfxBar;

		this.events.emit("scene-awake");
	}

	private onValueChangeNode_music!: onValueChangeNode;
	private musicBar!: HoriScrollBar;
	private onValueChangeNode_sfx!: onValueChangeNode;
	private sfxBar!: HoriScrollBar;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const {musicBar, sfxBar} = this

		musicBar.getScrollBar.setValue(this.registry.get('music-vol'))

		musicBar.getScrollBar.on('valuechange', (newValue: number) => {
			// 	// when value changes, this should fire an event to Controller Scene
			eventsCenter.emit('change-music-volume', newValue)
			// 	console.log(`new value: ${newValue}, old value: ${prevValue}`))
		})

		sfxBar.getScrollBar.setValue(this.registry.get('sfx-vol'))

		sfxBar.getScrollBar.on('valuechange', (newValue: number) => {
			// 	// when value changes, this should fire an event to Controller Scene
			eventsCenter.emit('change-sfx-volume', newValue)
			// 	console.log(`new value: ${newValue}, old value: ${prevValue}`))
		})

		// musicBar.getScrollBar.setValue(this.registry.get("music-vol"))

		// sfxBar.getScrollBar.setValue(this.registry.get("music-vol"))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
