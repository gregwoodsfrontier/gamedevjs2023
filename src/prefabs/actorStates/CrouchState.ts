
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { IRunStateParams } from "../../interfaces/state_params";
import { ANIM_CRAWL_GO, ANIM_CRAWL_IDLE } from "../../consts/shiba-anims";
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
	onEnter(sprite: Phaser.Physics.Arcade.Sprite) {
		if(sprite.body) {
			const { body } = sprite
			this.currentSize = {
				width: body.width,
				height: body.height
			}
			
			sprite.play(ANIM_CRAWL_IDLE, true)
			
			sprite.setBodySize(this.currentSize.width , this.currentSize.height / 2, false)
			sprite.body.offset.y += this.currentSize.height / 2
		}
	}

	onUpdate(params: IRunStateParams) {
		const { sprite, isLeft, isRight, speed } = params

		if(isLeft) {
			sprite.flipX = true
			sprite.setVelocityX(-speed * this.speedMod)
			sprite.play(ANIM_CRAWL_GO, true)
		}
		else if (isRight) {
			sprite.flipX = false
			sprite.setVelocityX(speed  * this.speedMod)
			sprite.play(ANIM_CRAWL_GO, true)
		}
		else
		{
			sprite.setVelocityX(0)
			sprite.play(ANIM_CRAWL_IDLE, true)
		}
	}

	onExit(sprite: Phaser.Physics.Arcade.Sprite) {
		if(sprite.body) {
			sprite.setBodySize(this.currentSize.width, this.currentSize.height, false)
			// sprite.setScale(1, 1)
			// sprite.setOffset(0, -this.currentSize.height / 2)
			sprite.body.offset.y -= this.currentSize.height / 2
			// sprite.setDisplaySize(sprite.displayWidth, sprite.displayHeight * 2)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
