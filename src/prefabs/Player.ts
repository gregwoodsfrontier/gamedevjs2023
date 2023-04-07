
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StateMachineComp from "../components/StateMachineComp";
/* START-USER-IMPORTS */
import { ANIM_P_IDLE } from "../animations";
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player-idle", frame ?? 0);

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
