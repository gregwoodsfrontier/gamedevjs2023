
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/base/OnPointerDownScript";
import ChangeStateInController from "./scriptNodes/ChangeStateInController";
import EmitEventActionScript from "./scriptNodes/base/EmitEventActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RestartButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Restart", frame);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// changeStateInController
		const changeStateInController = new ChangeStateInController(onPointerDownScript);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(onPointerDownScript);

		// changeStateInController (prefab fields)
		changeStateInController.SMState = "restart";

		// emitEventActionScript (prefab fields)
		emitEventActionScript.eventName = "sfx-play";
		emitEventActionScript.eventEmitter = "game.events";

		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.on('pointerdown', () => {
		// 	eventsCenter.shutdown()
		// })
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
