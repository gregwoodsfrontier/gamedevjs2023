
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import eventsCenter from "../../eventCenter";
/* END-USER-IMPORTS */

export default class setAudioVolume extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public gameAudioType: "music"|"sfx" = "music";

	/* START-USER-CODE */

	// Write your code here.
	execute(newVal: number) {
		console.log("set audio is called")
		eventsCenter.emit("set-volume", newVal, this.gameAudioType)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
