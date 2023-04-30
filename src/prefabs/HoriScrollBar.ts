
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/base/OnPointerDownScript";
import EmitEventActionScript from "./scriptNodes/base/EmitEventActionScript";
import OnPointerUpScript from "./scriptNodes/base/OnPointerUpScript";
/* START-USER-IMPORTS */
import { ScrollBar } from "phaser3-rex-plugins/templates/ui/ui-components";
/* END-USER-IMPORTS */

export default class HoriScrollBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -37.11756271844499);

		// bar
		const bar = scene.add.rectangle(0, 0, 160, 32);
		bar.scaleX = 1.7194628294440388;
		bar.scaleY = 1.4259290793482646;
		bar.isFilled = true;
		bar.fillColor = 16027177;
		bar.strokeColor = 4184966;
		bar.lineWidth = 2;
		this.add(bar);

		// leftButton
		const leftButton = scene.add.triangle(-112, 1, 0, 128, 64, 0, 128, 128);
		leftButton.scaleX = 0.29048739001338675;
		leftButton.scaleY = 0.33391345579244713;
		leftButton.angle = -90;
		leftButton.isFilled = true;
		this.add(leftButton);

		// rightButton
		const rightButton = scene.add.triangle(110, 0, 0, 128, 64, 0, 128, 128);
		rightButton.scaleX = 0.29048739001338675;
		rightButton.scaleY = -0.33391345579244713;
		rightButton.angle = -90;
		rightButton.isFilled = true;
		this.add(rightButton);

		// slider
		const slider = scene.add.rectangle(0, 0, 128, 128);
		slider.scaleX = 0.23436465736130904;
		slider.scaleY = 0.2801744190574454;
		slider.isFilled = true;
		slider.fillColor = 9244819;
		slider.isStroked = true;
		slider.strokeColor = 1895376;
		this.add(slider);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(slider);

		// emitSFXClick
		const emitSFXClick = new EmitEventActionScript(onPointerDownScript);

		// onPointerUpScript
		const onPointerUpScript = new OnPointerUpScript(slider);

		// emitSFXVolume
		const emitSFXVolume = new EmitEventActionScript(onPointerUpScript);

		// emitSFXClick (prefab fields)
		emitSFXClick.eventName = "sfx-click";
		emitSFXClick.eventEmitter = "game.events";

		// emitSFXVolume (prefab fields)
		emitSFXVolume.eventName = "sfx-volume";
		emitSFXVolume.eventEmitter = "game.events";

		/* START-USER-CTR-CODE */
		// Write your code here.

		const scrollbar = new ScrollBar(scene, {
			width: bar.displayWidth * 0.9,
			height:bar.displayHeight,
			buttons: {
				left: leftButton,
				right: rightButton,
				step: 0.01
			},
			slider: {
				thumb: slider
			},
			background: bar,
			orientation: 'x',
			space: {
				//@ts-ignore
				// item prop works as intended
				left: 1, right: 1, top: 1, bottom: 1, item: 5
			}
		})
		scene.add.existing(scrollbar)
		scrollbar.layout()

		this.scrollbarRef = scrollbar
	}

	/* START-USER-CODE */

	// Write your code here.
	private scrollbarRef: ScrollBar

	// give scenes access to scroll bar
	get getScrollBar() {
		return this.scrollbarRef
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */