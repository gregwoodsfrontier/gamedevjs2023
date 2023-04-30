
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/base/OnPointerDownScript";
import ChangeStateInController from "./scriptNodes/ChangeStateInController";
import PushOnClick from "./scriptNodes/PushOnClick";
import EmitEventActionScript from "./scriptNodes/base/EmitEventActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 320, y ?? 179, texture || "Play Button", frame);

		this.scaleX = 1.5;
		this.scaleY = 1.25;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// changeStateInController
		const changeStateInController = new ChangeStateInController(onPointerDownScript);

		// pushOnClick
		new PushOnClick(this);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(this);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(onPointerDownScript_1);

		// changeStateInController (prefab fields)
		changeStateInController.SMState = "level";

		// emitEventActionScript (prefab fields)
		emitEventActionScript.eventName = "sfx-play";
		emitEventActionScript.eventEmitter = "game.events";

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
