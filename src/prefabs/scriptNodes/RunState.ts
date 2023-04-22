
// You can write more code here

/* START OF COMPILED CODE */

import { ANIM_P_RUN } from "../../animations";
import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RunState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public stateName: string = "run";

	/* START-USER-CODE */

	// Write your code here.
	onEnter(sprite: Phaser.Physics.Arcade.Sprite) {
		
		sprite.play(ANIM_P_RUN)
		
	}

	onUpdate(sprite: Phaser.Physics.Arcade.Sprite, isLeft: boolean | undefined, isRight: boolean | undefined, speed: number) {
		if(isLeft) {
			sprite.flipX = true
			sprite.setVelocityX(-speed)
		}
		else if (isRight) {
			sprite.flipX = false
			sprite.setVelocityX(speed)
		}
		else
		{
			sprite.setVelocityX(0)
		}
	}

	onExit(sprite: Phaser.Physics.Arcade.Sprite) {
		sprite.stop()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
