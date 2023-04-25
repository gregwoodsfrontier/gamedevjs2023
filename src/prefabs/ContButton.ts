
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/OnPointerDownScript";
import ChangeStateInController from "./scriptNodes/ChangeStateInController";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ContButton extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? null, y ?? null);

		// contButton
		const contButton = scene.add.image(null, null, "Continue");
		contButton.scaleX = 0.7;
		contButton.scaleY = 0.7;
		this.add(contButton);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(contButton);

		// toLevel
		const toLevel = new ChangeStateInController(onPointerDownScript);

		// toLevel (prefab fields)
		toLevel.SMState = "level";

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