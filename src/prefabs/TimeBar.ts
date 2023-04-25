
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
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this)

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
		/* END-USER-CTR-CODE */
	}

	private bar: Phaser.GameObjects.Rectangle;
	private fill: Phaser.GameObjects.Rectangle;
	public timer: number = 30;

	/* START-USER-CODE */
	private timerInMs = 0
	private remainingRatio = 0
	private isPaused = false
	private unixNow = 0
	private unixTarget = 0
	// private barTimerEvent!: Phaser.Time.TimerEvent

	// Write your code here.
	start() {
		// fill the bar first
		this.fill.width = this.bar.width

		const { scene } = this

		if(!scene) {return}

		this.timerInMs = this.timer * 1000

		this.unixNow = scene.time.now

		this.unixTarget = this.unixNow + this.timerInMs

		eventsCenter.on("pause-game", this.pauseGame, this)

		eventsCenter.on("resume-game", this.resumeGame, this)


	}

	update(time: number, delta: number) {

		const { scene } = this

		if(!scene) {return}

		if(scene.time.now > this.unixTarget && !this.isPaused) {
			eventsCenter.emit("change-game-state", "gameover")
		}

		const fillScale = this.getRemainingPeriodRatio()

		this.fill.setScale(fillScale, 1)
	}

	private pauseGame() {
		this.isPaused = true
		// save the remainingRatio to the class
		this.remainingRatio = this.getRemainingPeriodRatio()
	}

	private resumeGame() {
		const { scene } = this

		this.isPaused = false
		// update the target timestamp
		this.unixTarget = scene.time.now + this.remainingRatio * this.timerInMs
		// reset the remaining ratio
		this.remainingRatio = 0
	}

	private getRemainingPeriodRatio() {
		const { scene } = this

		return Phaser.Math.Difference(this.unixTarget, scene.time.now) / this.timerInMs
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
