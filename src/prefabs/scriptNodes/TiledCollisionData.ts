
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TiledCollisionData extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.platGroup = this.scene.physics.add.staticGroup()
		/* END-USER-CTR-CODE */
	}

	public layer!: Phaser.Tilemaps.TilemapLayer;
	public player!: Phaser.GameObjects.GameObject;
	public paperList!: Phaser.GameObjects.GameObject[];

	/* START-USER-CODE */

	// Write your code here.
	private platGroup: Phaser.Physics.Arcade.StaticGroup

	awake() {
		this.makeCollisionGP()

		const graphics = this.scene.add.graphics();

		// this.layer.renderDebug(graphics)
		this.scene.physics.add.collider(this.player, this.platGroup)
		this.scene.physics.add.collider(this.paperList, this.platGroup)
	}

	/**
	 * Make a static group for the custom collision data
	 */
	private makeCollisionGP() {
		const {layer} = this

		const {tileset} = this.layer

		const graphics = this.scene.add.graphics();

		graphics.lineStyle(5, 0x00ffff, 1);

		layer.forEachTile(tile => {
			const tileWorldPos = layer.tileToWorldXY(tile.x, tile.y)
			const collisionGroup = tileset[0].getTileCollisionGroup(tile.index)

			// skipping the ts check as one need to specify the type for this to avoid typescript scolding
			//@ts-ignore
			if (!collisionGroup || collisionGroup.objects.length === 0) { return; }

			// The group will have an array of objects - these are the individual collision shapes
			//@ts-ignore
            const objects = collisionGroup.objects;

			for(let obj of objects) {
				const objectX = tileWorldPos.x + obj.x;
				const objectY = tileWorldPos.y + obj.y;

				if(obj.rectangle) {
					const plat = this.platGroup.create(objectX, objectY, tile.tileset?.image?.key, tile.index).setOrigin(0, 0) as Phaser.Physics.Arcade.Sprite
					// set the size and origin of each plat
					plat.body?.setSize(obj.width, obj.height).setOffset(8, 8)

					// graphics.strokeRect(objectX, objectY, obj.width, obj.height);
				}

				this.layer.removeTileAtWorldXY(objectX, objectY)
			}
		})
	}

	get getPlatGroup() {
		return this.platGroup
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
