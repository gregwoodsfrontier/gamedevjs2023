
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { IRunStateParams } from "../../interfaces/state_params";
import eventsCenter from "../../eventCenter";
/* END-USER-IMPORTS */

export default class RunState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public name: string = "run";
	public dashModifier: number = 1;

	/* START-USER-CODE */

	// Write your code here.
	onEnter(sprite: Phaser.Physics.Arcade.Sprite, animkey: string) {

		sprite.play(animkey)

	}

	onUpdate(params: IRunStateParams) {
		const { sprite, isLeft, isRight, speed } = params

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

		eventsCenter.emit("sfx-step")
	}

	onExit(sprite: Phaser.Physics.Arcade.Sprite) {
		sprite.stop()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
