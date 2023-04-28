
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DashState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public stateName: string = "dash";
	public dashMod: number = 5;
	public drag: number = 0.005;

	/* START-USER-CODE */

	// Write your code here.
	onEnter(sprite: Phaser.Physics.Arcade.Sprite, animKey: string, speed: number) {

		sprite.play(animKey)

		const { dashMod, drag } = this

		if(sprite.flipX === true) {

			sprite.setVelocityX(-speed * dashMod).setDragX(drag)
		}
		else {
			sprite.setVelocityX(speed * dashMod).setDragX(drag)
		}
	}

	onExit(sprite: Phaser.Physics.Arcade.Sprite) {
		sprite.stop()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
