
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/OnPointerDownScript";
import onPauseScreenNode, { PAUSE_GAME, RESUME_GAME } from "./scriptNodes/onPauseScreenNode";
/* START-USER-IMPORTS */
import eventsCenter from "../eventCenter";
/* END-USER-IMPORTS */

export default class PauseButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "pause", frame);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// onPauseScreenNode
		new onPauseScreenNode(onPointerDownScript);

		/* START-USER-CTR-CODE */
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this)
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	start() {
		eventsCenter.on(PAUSE_GAME, () => {
			this.setTexture("Play")
		}, this)

		eventsCenter.on(RESUME_GAME, () => {
			this.setTexture("pause")
		}, this)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
