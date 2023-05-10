
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Player from "../Player";
/* END-USER-IMPORTS */

export default class CheckTopTile extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public layer!: Phaser.Tilemaps.TilemapLayer;
	public getPlayer!: Player;

	/* START-USER-CODE */

	// Write your code here.
	protected update(): void {
		// console.warn(`cordX: ${this.getPlayer.x}`)
		if(this.layer?.hasTileAtWorldXY(this.getPlayer.x + 16, this.getPlayer.y + 5))
		{
			console.warn('tile is detected')
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
