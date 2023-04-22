
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/OnPointerDownScript";
import StartSceneActionScript from "./scriptNodes/StartSceneActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SettingsButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Settings Button", frame);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(onPointerDownScript);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Settings";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
