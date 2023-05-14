
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../scriptNodes/base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Player from "../Player";
import eventsCenter from "../../eventCenter";
import StateMachineNode from "../scriptNodes/StateMachineNode";
/* END-USER-IMPORTS */

export default class RunState extends ScriptNode {

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
			},
			onUpdate: () => {
				this.onUpdate(this.gameObject as Player)
			},
			onExit: () => {
				this.onExit(this.gameObject as Phaser.Physics.Arcade.Sprite)
			},
		})

		/* END-USER-CTR-CODE */
	}

	public name: string = "run";
	public dashModifier: number = 1;
	public anims: string = "shiba-walk";

	/* START-USER-CODE */

	// Write your code here.
	private checkParentIfStateMachine(){
		return this.parent instanceof StateMachineNode
	}

	onEnter(sprite: Phaser.Physics.Arcade.Sprite) {

		sprite.play(this.anims)

	}

	onUpdate(_player: Player) {

		const cursors = _player._getCursors
		const WASDKeys = _player._getWASD


		const isLeft = cursors?.left.isDown || WASDKeys?.left.isDown
		const isRight = cursors?.right.isDown || WASDKeys?.right.isDown

		if(isLeft) {
			_player.flipX = true
			// _player.setVelocityX(-_player.runSpeed)
		}
		else if (isRight) {
			_player.flipX = false
			// _player.setVelocityX(_player.runSpeed)
		}
		else
		{
			// _player.setVelocityX(0)
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
