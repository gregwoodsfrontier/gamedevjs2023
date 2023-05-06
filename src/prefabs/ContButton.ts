
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/base/OnPointerDownScript";
import ChangeStateInController from "./scriptNodes/ChangeStateInController";
import EmitEventActionScript from "./scriptNodes/base/EmitEventActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ContButton extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// contButton
		const contButton = scene.add.image(0, 0, "Continue");
		contButton.scaleX = 0.7;
		contButton.scaleY = 0.7;
		this.add(contButton);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(contButton);

		// toLevel
		const toLevel = new ChangeStateInController(onPointerDownScript);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(onPointerDownScript);

		// toLevel (prefab fields)
		toLevel.SMState = "level";

		// emitEventActionScript (prefab fields)
		emitEventActionScript.eventName = "sfx-play";
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
