
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "./Player";
import PlayerController from "./scriptNodes/PlayerController";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerContainer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// player_1
		const player_1 = new Player(scene, 0, 0);
		this.add(player_1);

		// detectionBox
		const detectionBox = scene.add.rectangle(-4, -6, 32, 8);
		detectionBox.isFilled = true;
		detectionBox.fillAlpha = 0.3;
		this.add(detectionBox);

		// playerController
		const playerController = new PlayerController(this);

		// playerController (prefab fields)
		playerController.sprite = player_1;

		this.detectionBox = detectionBox;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public detectionBox: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
