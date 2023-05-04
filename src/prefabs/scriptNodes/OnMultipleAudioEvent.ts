
// You can write more code here

/* START OF COMPILED CODE */

import OnEventScript from "./base/OnEventScript";
import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnMultipleAudioEvent extends OnEventScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// this (prefab fields)
		this.eventName = "";
		this.eventEmitter = "game.events";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public audioKeyPrefix: string = "";

	/* START-USER-CODE */
	public audioKeyList = []

	// Write your code here.
	override awake(): void {
		this.audioKeyList = this.scene.sound.getAll(this.audioKeyPrefix)

		if(this.audioKeyList.length === 0) { return }

		super.awake();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
