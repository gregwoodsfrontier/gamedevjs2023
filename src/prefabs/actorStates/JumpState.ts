
// You can write more code here

/* START OF COMPILED CODE */

import { ANIM_P_JUMP } from "../../animations";
import ScriptNode from "../scriptNodes/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class JumpState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public stateName: string = "jump";

	/* START-USER-CODE */

	// Write your code here.
	onEnter(sprite: Phaser.Physics.Arcade.Sprite, jumpSpd: number) {
		sprite.setVelocityY(-jumpSpd)
		
		sprite.play(ANIM_P_JUMP)
	}

	onUpdate(sprite: Phaser.Physics.Arcade.Sprite, isLeft: boolean | undefined, isRight: boolean | undefined, hasJetPack: boolean, speed: number) {
		if(hasJetPack) {
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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
