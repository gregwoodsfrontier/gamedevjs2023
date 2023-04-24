
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { ANIM_SHIBA_DEAD } from "../consts/shiba-anims";
import eventsCenter from "../eventCenter";
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

		// container_1
		const container_1 = this.add.container(-2.5, 0);

		// bg
		const bg = this.add.rectangle(0, 0, 128, 128);
		bg.scaleX = 5.039062500000001;
		bg.scaleY = 2.8515625;
		bg.setOrigin(0, 0);
		bg.isFilled = true;
		bg.fillColor = 1911635;
		container_1.add(bg);

		// title
		const title = this.add.bitmapText(322.5, 80, "StayPixel2", "one more time??");
		title.scaleX = 0.9910714285714286;
		title.setOrigin(0.5, 0.5);
		title.tintFill = true;
		title.tintTopLeft = 16773608;
		title.tintTopRight = 16773608;
		title.tintBottomLeft = 16773608;
		title.tintBottomRight = 16773608;
		title.text = "one more time??";
		title.fontSize = 72;
		title.letterSpacing = 2;
		container_1.add(title);

		// shadow
		const shadow = this.add.ellipse(306.5, 304, 128, 128);
		shadow.scaleX = 1.84375;
		shadow.scaleY = 0.5312500000000004;
		shadow.isFilled = true;
		shadow.fillColor = 12764103;
		container_1.add(shadow);

		// gameoverDog
		const gameoverDog = this.add.sprite(322.5, 192, "shiba_death", 0);
		gameoverDog.scaleX = 5;
		gameoverDog.scaleY = 5;
		container_1.add(gameoverDog);

		this.gameoverDog = gameoverDog;
		this.container_1 = container_1;

		this.events.emit("scene-awake");
	}

	private gameoverDog!: Phaser.GameObjects.Sprite;
	private container_1!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.container_1.x = this.scale.width
	
		eventsCenter.once("to-level", (levelkey: string) => {
			this.scene.transition({
				target: levelkey,
				duration: 400,
				moveBelow: true,
				onUpdate: (progress: number) => {
					this.container_1.x = this.scale.width * progress
				}
			})
		}, this)

		this.gameoverDog.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {

			eventsCenter.emit("change-game-state", "level")
		}, this)

		this.events.on("transitionstart", () => {
			const containertween = this.tweens.add({
				targets: this.container_1,
				x: 0,
				duration: 800,
				ease: "sine.out"
			})
			containertween.once(Phaser.Tweens.Events.TWEEN_COMPLETE, () => {
				// console.log("tween complete")
				// this.scene.manager.dump()
				this.gameoverDog.play(ANIM_SHIBA_DEAD, true)
			})
		}, this)

		

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
