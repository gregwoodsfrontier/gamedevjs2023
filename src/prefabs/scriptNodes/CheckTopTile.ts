
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

	/* START-USER-CODE */
	private rectangle!: Phaser.GameObjects.Rectangle;

	// Write your code here.
	awake() {
		this.scene.events.once("detectionBox", (rect: Phaser.GameObjects.Rectangle) => {
			this.rectangle = rect

			console.log(this.rectangle, "in checkTopTile node.")
		}, this)

	}
	
	protected update(): void {
		const conditions = [
			this.checkTileOnBottomLeft(),
			this.checkTileOnBottomRight(),
			this.checkTileOnTopLeft(),
			this.checkTileOnTopRight()
		]

		if(conditions.includes(true)) {
			console.log(" tile is detected. Do something. ")
		}
	}

	private checkTileOnTopLeft() {
		if(!this.layer || !this.rectangle || !this.rectangle.getTopLeft()) { return }

		const {x, y} = this.rectangle.getTopLeft()

		if (!x || !y) { return }

		return this.layer.hasTileAtWorldXY(x, y)
	}

	private checkTileOnTopRight() {
		if(!this.layer || !this.rectangle || !this.rectangle.getTopRight()) { return }

		const {x, y} = this.rectangle.getTopRight()

		if (!x || !y) { return }

		return this.layer.hasTileAtWorldXY(x, y)
	}

	private checkTileOnBottomLeft() {
		if(!this.layer || !this.rectangle || !this.rectangle.getBottomLeft()) { return }

		const {x, y} = this.rectangle.getBottomLeft()

		if (!x || !y) { return }

		return this.layer.hasTileAtWorldXY(x, y)
	}

	private checkTileOnBottomRight() {
		if(!this.layer || !this.rectangle || !this.rectangle.getBottomRight()) { return }

		const {x, y} = this.rectangle.getBottomRight()

		if (!x || !y) { return }

		return this.layer.hasTileAtWorldXY(x, y)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
