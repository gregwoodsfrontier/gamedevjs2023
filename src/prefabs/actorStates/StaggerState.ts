
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import StateMachineNode from "../scriptNodes/StateMachineNode";
/* END-USER-IMPORTS */

export default class StaggerState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public name: string = "stagger";
	public timer: number = 1000;

	/* START-USER-CODE */

	// Write your code here.
	onEnter(sprite: Phaser.Physics.Arcade.Sprite) {
		// make the sprite red to indicate stagger
		sprite.setTint(0xff0000)

		// make the sprite backoff a little to indicate hurt
		if(sprite.flipX)
		{
			sprite.setVelocityX(30).setDragX(0.1)
		}
		else
		{
			sprite.setVelocityX(-30).setDragX(0.1)
		}

		this.scene.time.delayedCall(this.timer, () => {
			const machine = this.parent as StateMachineNode

			if(!machine.setState) {
				return
			}

			machine.setState('idle')
		})
	}

	onUpdate(sprite: Phaser.Physics.Arcade.Sprite) {
		if(!sprite.body) { return }

		if(Math.abs(sprite.body?.velocity.x) < 5)
		{
			sprite.setVelocityX(0)
		}
	}

	onExit(sprite: Phaser.Physics.Arcade.Sprite) {
		sprite.setTint(0xffffff)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
