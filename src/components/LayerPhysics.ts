
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LayerPhysics {

	constructor(gameObject: Phaser.Tilemaps.TilemapLayer) {
		this.gameObject = gameObject;
		(gameObject as any)["__LayerPhysics"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.setCollisionByProperty({ collides: true });
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Tilemaps.TilemapLayer): LayerPhysics {
		return (gameObject as any)["__LayerPhysics"];
	}

	private gameObject: Phaser.Tilemaps.TilemapLayer;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
