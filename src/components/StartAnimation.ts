
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartAnimation extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Sprite) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__StartAnimation"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Sprite): StartAnimation {
		return (gameObject as any)["__StartAnimation"];
	}

	private gameObject: Phaser.GameObjects.Sprite;
	public animationKey: string = "";

	/* START-USER-CODE */

	// Write your code here.
	start() {
		this.gameObject.play(this.animationKey)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
