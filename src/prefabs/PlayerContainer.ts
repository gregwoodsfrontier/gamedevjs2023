
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "./Player";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerContainer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// sprite
		const sprite = new Player(scene, 0, 0);
		this.add(sprite);

		// detectionBox
		const detectionBox = scene.add.rectangle(-4, -3, 32, 2);
		detectionBox.isFilled = true;
		detectionBox.fillAlpha = 0.3;
		this.add(detectionBox);

		this.sprite = sprite;
		this.detectionBox = detectionBox;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		/* END-USER-CTR-CODE */
	}

	private sprite: Player;
	private detectionBox: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		this.scene.events.emit("detectionBox", this.detectionBox)
	}

	update() {
		// updates container position to match with the sprite velocity
		this.x += this.sprite.body.velocity.x

		this.y += this.sprite.body.velocity.y
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
