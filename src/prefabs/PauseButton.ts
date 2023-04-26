
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/OnPointerDownScript";
import AudioAddNode from "./scriptNodes/AudioAddNode";
/* START-USER-IMPORTS */
import eventsCenter from "../eventCenter";
import { PAUSE_GAME, RESUME_GAME } from "./scriptNodes/onPauseScreenNode";
/* END-USER-IMPORTS */

export default class PauseButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "pause", frame);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// audioAddNode
		const audioAddNode = new AudioAddNode(onPointerDownScript);

		// audioAddNode (prefab fields)
		audioAddNode.audioKey = "Menu_SFX_Click";

		/* START-USER-CTR-CODE */
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this)
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	start() {
		this.setInteractive()

		this.on("pointerdown", () => {
			if(!this.scene.scene.isActive("Pause"))
			{
				eventsCenter.emit("change-game-state", "pause")
			}
			else 
			{
				eventsCenter.emit("change-game-state", "level")
			}
		})

		eventsCenter.on(PAUSE_GAME, () => {
			if(!this.scene){return}
			this.setTexture("Play")
		}, this)

		eventsCenter.on(RESUME_GAME, () => {
			if(!this.scene){return}
			this.setTexture("pause")
		}, this)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
