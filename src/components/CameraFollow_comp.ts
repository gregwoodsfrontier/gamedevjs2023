
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent__comp";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CameraFollow extends UserComponent {

	constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__CameraFollow"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): CameraFollow {
		return (gameObject as any)["__CameraFollow"];
	}

	private gameObject: Phaser.Physics.Arcade.Sprite;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.scene.cameras.main.startFollow(this.gameObject)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
