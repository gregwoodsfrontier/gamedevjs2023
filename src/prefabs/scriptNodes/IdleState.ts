
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { ANIM_P_IDLE } from "../../animations";
/* END-USER-IMPORTS */

export default class IdleState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public stateName: string = "idle";

	/* START-USER-CODE */

	// Write your code here.
	onEnter(sprite: Phaser.Physics.Arcade.Sprite) {
		sprite.setVelocityX(0)

		sprite.play(ANIM_P_IDLE)

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
