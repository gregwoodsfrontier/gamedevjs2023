
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/OnPointerDownScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ContButton extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? NaN, y ?? NaN);

		// contButton
		const contButton = scene.add.image(NaN, NaN, "Continue");
		contButton.scaleX = 0.7;
		contButton.scaleY = 0.7;
		this.add(contButton);

		// onPointerDownScript
		new OnPointerDownScript(this);

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
