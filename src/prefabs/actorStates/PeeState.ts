
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import StateMachineNode from "../scriptNodes/StateMachineNode";
import { ANIM_PEE_END, ANIM_PEE_MID, ANIM_PEE_START, ANIM_SHIBA_IDLE } from "../../consts/shiba-anims";
/* END-USER-IMPORTS */

export default class PeeState extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		if(!this.checkParentIfStateMachine()) {
			return
		}

		(this.parent as StateMachineNode).addState(this.name, {
			onEnter: () => {
				this.onEnter(this.gameObject as Phaser.Physics.Arcade.Sprite)
			}
		})

		/* END-USER-CTR-CODE */
	}

	public name: string = "pee";

	/* START-USER-CODE */

	// Write your code here.

	onEnter(sprite: Phaser.Physics.Arcade.Sprite) {
		sprite.once("animationcomplete-pee-mid", () => {
			(this.parent as StateMachineNode).setState("idle")
		})
		// TODO: play the peeing animtion. See if it can be chained
		sprite.playAfterRepeat(ANIM_PEE_START)
		// sprite.play(ANIM_PEE_MID)
		sprite.chain([ANIM_PEE_MID, ANIM_PEE_END])
		// After the pee animations is completed, set machine state back to idle.
	}

	private checkParentIfStateMachine(){
		return this.parent instanceof StateMachineNode
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
