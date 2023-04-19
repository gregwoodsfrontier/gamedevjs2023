
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { IRunStateParams } from "../../interfaces/state_params";
/* END-USER-IMPORTS */

export default class CrouchState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public speedMod: number = 0.5;
	public stateName: string = "crouch";

	/* START-USER-CODE */
	private currentSize = {
		width: 0,
		height: 0
	}

	// Write your code here.
	onEnter(sprite: Phaser.Physics.Arcade.Sprite, animKey: string | undefined) {
		if(sprite.body) {
			const { body } = sprite
			this.currentSize = {
				width: body.width,
				height: body.height
			}
			
			sprite.setBodySize(this.currentSize.width , this.currentSize.height / 2, false)
			sprite.body.offset.y += 10
			// sprite.setDisplaySize(sprite.displayWidth, sprite.displayHeight / 2)
			// sprite.setScale(1, 0.5)
		}

		if(animKey){ sprite.play(animKey) }
	}

	onUpdate(params: IRunStateParams) {
		const { sprite, isLeft, isRight, speed } = params

		if(isLeft) {
			sprite.flipX = true
			sprite.setVelocityX(-speed * this.speedMod)
		}
		else if (isRight) {
			sprite.flipX = false
			sprite.setVelocityX(speed  * this.speedMod)
		}
		else
		{
			sprite.setVelocityX(0)
		}
	}

	onExit(sprite: Phaser.Physics.Arcade.Sprite) {
		if(sprite.body) {
			sprite.setBodySize(this.currentSize.width, this.currentSize.height, false)
			sprite.body.offset.y -= 10
			// sprite.setDisplaySize(sprite.displayWidth, sprite.displayHeight * 2)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
