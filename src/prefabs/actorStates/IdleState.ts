
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import StateMachineNode from "../scriptNodes/StateMachineNode";
import PlayerContainer from "../PlayerContainer";
/* END-USER-IMPORTS */

export default class IdleState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		if(!this.checkParentIfStateMachine()) {
			return
		}

		(this.parent as StateMachineNode).addState(this.name, {
			onEnter: this._onEnter,
			onUpdate: this._onUpdate
		})

		/* END-USER-CTR-CODE */
	}

	public name: string = "idle";
	public anims: string = "shiba-idle";

	/* START-USER-CODE */

	// Write your code here.

	_onEnter() {
		if(!(this.gameObject instanceof PlayerContainer))
		{
			console.warn('root game object is not instance of container')
			return
		}

		const container = this.gameObject as PlayerContainer

		container._getPhysicsContainer.setVelocityX(0)

		container.sprite_1.play(this.anims)
	}

	_onUpdate() {

	}

	// check dash
	// check run
	// check jump
	// check crouch

	private checkParentIfStateMachine(){
		return this.parent instanceof StateMachineNode
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
