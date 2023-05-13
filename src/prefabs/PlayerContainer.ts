
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
		this.scene.physics.world.enable(this);
		(this.body as Phaser.Physics.Arcade.Body).setAllowGravity(false).setSize(12, 12)


		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	public sprite: Player;
	private detectionBox: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.
	update(): void {
		const cursors = this.sprite._getCursors
		const WASDKeys = this.sprite._getWASD

		const isLeft = cursors?.left.isDown || WASDKeys?.left.isDown
		const isRight = cursors?.right.isDown || WASDKeys?.right.isDown

		if(isLeft) {
			(this.body as Phaser.Physics.Arcade.Body).setVelocityX(-this.sprite.runSpeed)
		}
		else if (isRight) {
			(this.body as Phaser.Physics.Arcade.Body).setVelocityX(this.sprite.runSpeed)
		}
		else
		{
			(this.body as Phaser.Physics.Arcade.Body).setVelocityX(0)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
