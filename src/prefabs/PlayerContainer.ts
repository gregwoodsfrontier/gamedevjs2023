
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "./Player";
import ArrowCursors from "./scriptNodes/ArrowCursors";
import WASDCursors from "./scriptNodes/WASDCursors";
import ArcadePhyBody from "./scriptNodes/ArcadePhyBody";
import CamFollow from "./scriptNodes/CamFollow";
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

		// attack_box
		const attack_box = scene.add.rectangle(24, 10, 128, 128);
		attack_box.scaleX = 0.15787080101651232;
		attack_box.scaleY = 0.1863834170233853;
		attack_box.isFilled = true;
		attack_box.fillColor = 2802487;
		attack_box.fillAlpha = 0.5;
		this.add(attack_box);

		// arrowCursors
		const arrowCursors = new ArrowCursors(this);

		// wASDCursors
		const wASDCursors = new WASDCursors(this);

		// arcadePhyBody
		const arcadePhyBody = new ArcadePhyBody(this);

		// camFollow_1
		new CamFollow(this);

		// arcadePhyBody (prefab fields)
		arcadePhyBody.bodyWidth = 22;
		arcadePhyBody.bodyHeight = 20;
		arcadePhyBody.offsetY = 5;

		this.sprite = sprite;
		this.detectionBox = detectionBox;
		this.arrowCursors = arrowCursors;
		this.wASDCursors = wASDCursors;

		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.scene.events.once("scene-awake", this.awake, this);

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	public sprite: Player;
	private detectionBox: Phaser.GameObjects.Rectangle;
	private arrowCursors: ArrowCursors;
	private wASDCursors: WASDCursors;

	/* START-USER-CODE */

	// Write your code here.
	awake() {

	}

	update(): void {
		const cursors = this.arrowCursors.getCursors
		const WASDKeys = this.wASDCursors.getCursors

		const isLeft = cursors?.left.isDown || WASDKeys?.left.isDown
		const isRight = cursors?.right.isDown || WASDKeys?.right.isDown
		const isJumpUp = (cursors && Phaser.Input.Keyboard.JustDown(cursors?.up)) || (WASDKeys && Phaser.Input.Keyboard.JustDown(WASDKeys?.up)) && this.sprite.body.onFloor()

		if(!this.body) { return }

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
