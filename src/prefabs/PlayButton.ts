
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "./scriptNodes/OnPointerDownScript";
import StartSceneActionScript from "./scriptNodes/StartSceneActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 320, y ?? 179, texture || "Play Button", frame);

		this.scaleX = 1.5;
		this.scaleY = 1.25;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(onPointerDownScript);

		// startSceneActionScript_1
		const startSceneActionScript_1 = new StartSceneActionScript(onPointerDownScript);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Level";
		startSceneActionScript.data = { level: 1 };

		// startSceneActionScript_1 (prefab fields)
		startSceneActionScript_1.sceneKey = "UIScreen";

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
