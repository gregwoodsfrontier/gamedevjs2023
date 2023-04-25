
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/OnPointerDownScript";
import ChangeStateInController from "./scriptNodes/ChangeStateInController";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BackToMainButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Back", frame);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// changeStateInController
		const changeStateInController = new ChangeStateInController(onPointerDownScript);

		// changeStateInController (prefab fields)
		changeStateInController.SMState = "main-menu";

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
