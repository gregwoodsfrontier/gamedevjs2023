
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StateMachineComp from "../components/StateMachineComp";
/* START-USER-IMPORTS */
import { ANIM_P_IDLE } from "../animations";
/* END-USER-IMPORTS */

export default interface Player {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player-idle", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setSize(32, 32, false);

		// this (components)
		const thisStateMachineComp = new StateMachineComp(this);
		thisStateMachineComp.id = "player";

		/* START-USER-CTR-CODE */
		// Write your code here.
		thisStateMachineComp.addState('idle', {
			onEnter: this.idleOnEnter
		})
		.setState('idle')
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	idleOnEnter() {
		this.play(ANIM_P_IDLE)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
