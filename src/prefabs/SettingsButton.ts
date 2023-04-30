
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/base/OnPointerDownScript";
import ChangeStateInController from "./scriptNodes/ChangeStateInController";
import EmitEventActionScript from "./scriptNodes/base/EmitEventActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SettingsButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Settings Button", frame);

		this.scaleX = 1.5;
		this.scaleY = 1.25;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// changeStateInController
		const changeStateInController = new ChangeStateInController(onPointerDownScript);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(this);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(onPointerDownScript_1);

		// changeStateInController (prefab fields)
		changeStateInController.SMState = "settings";

		// emitEventActionScript (prefab fields)
		emitEventActionScript.eventName = "sfx-click";
		emitEventActionScript.eventEmitter = "game.events";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
