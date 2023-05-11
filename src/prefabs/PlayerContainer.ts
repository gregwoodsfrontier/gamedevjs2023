
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
		const detectionBox = scene.add.rectangle(-4, -3, 32, 2);
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
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		/* END-USER-CTR-CODE */
	}

	private detectionBox: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		// emit event to send the shape to the CheckTopTile node
		console.log("player container awake")
		this.scene.events.emit("detectionBox", this.detectionBox)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
