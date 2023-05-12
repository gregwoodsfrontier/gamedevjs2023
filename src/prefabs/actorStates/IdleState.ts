
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import StateMachineNode from "../scriptNodes/StateMachineNode";
/* END-USER-IMPORTS */

export default class IdleState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public name: string = "idle";
	public anims: string = "shiba-idle";

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if(!this.checkParentIfStateMachine()) {
			return
		}

		(this.parent as StateMachineNode).addState(this.name, {
			onEnter: () => {
				this.onEnter(this.gameObject as Phaser.Physics.Arcade.Sprite)
			}
		})
	}

	onEnter(sprite: Phaser.Physics.Arcade.Sprite) {
		sprite.setVelocityX(0)

		sprite.play(this.anims, true)

	}

	private checkParentIfStateMachine(){
		return this.parent instanceof StateMachineNode
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
