
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

/* START-USER-IMPORTS */
import eventsCenter from "../eventCenter";
/* END-USER-IMPORTS */

export default class TimeBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 264, y ?? 207);

		// bar
		const bar = scene.add.rectangle(0, 0, 300, 24);
		bar.setOrigin(0, 0);
		bar.isFilled = true;
		bar.fillColor = 3024182;
		bar.fillAlpha = 0.9;
		this.add(bar);

		// fill
		const fill = scene.add.rectangle(0, 0, 150, 24);
		fill.setOrigin(0, 0);
		fill.isFilled = true;
		fill.fillColor = 1375022;
		fill.fillAlpha = 0.9;
		this.add(fill);

		// hourglass
		const hourglass = scene.add.image(-24, 11, "hourglass");
		this.add(hourglass);

		this.bar = bar;
		this.fill = fill;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once("scene-awake", this.awake, this)

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
		/* END-USER-CTR-CODE */
	}

	private bar: Phaser.GameObjects.Rectangle;
	private fill: Phaser.GameObjects.Rectangle;
	public timer: number = 30;

	/* START-USER-CODE */
	private timerInMs = this.timer * 1000
	private isPaused = false

	// Write your code here.
	awake() {
		// fill the bar first
		this.fill.width = this.bar.width

		eventsCenter.on("pause-game", () => {
			this.isPaused = true
		})

		eventsCenter.on("resume-game", () => {
			this.isPaused = false
		})

		// this.scene.events.on("stop-timer", () => {
		// 	this.isPaused = true
		// })

		// this.scene.events.on("start-timer", () => {
		// 	this.isPaused = false
		// })
	}

	update(time: number, delta: number) {
		if(!this.isPaused) {
			this.timerInMs -= delta
		}
		
		const fillScale = Phaser.Math.Clamp(this.timerInMs / (this.timer * 1000), 0, 1)

		this.fill.setScale(fillScale, 1)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here