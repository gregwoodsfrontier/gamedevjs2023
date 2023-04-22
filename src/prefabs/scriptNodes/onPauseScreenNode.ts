
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import eventsCenter from "../../eventCenter";
/* END-USER-IMPORTS */

export default class onPauseScreenNode extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	private isPause = false
	private levelKey = "Level"

	execute(): void {
		this.runPauseButtonLogic(this.levelKey)
	}

	runPauseButtonLogic(currLevelKey: string) {
		if(!this.isPause) {
			this.isPause = true

			// pause the current level
			this.scene.scene.pause(currLevelKey)

			// Launch the pause scene
			this.scene.scene.launch("Pause")

			//stop the time in UI screen
			eventsCenter.emit(PAUSE_GAME)
		}
		else {
			this.isPause = false

			// restart the current level
			this.scene.scene.resume(currLevelKey)

			// Stop the pause scene
			this.scene.scene.stop("Pause")

			//restart the time in UI screen
			eventsCenter.emit(RESUME_GAME)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export const PAUSE_GAME = "pause-game"
export const RESUME_GAME = "resume-game"
