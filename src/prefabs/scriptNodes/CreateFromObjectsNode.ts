
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CreateFromObjectsNode extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public _name: string = "";
	public classType!: any;
	public textureKey: string = "";
	public targetList!: Phaser.GameObjects.GameObject[];
	public tilemapSrce!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		const spawnPoints = this.tilemapSrce.createFromObjects("Objects", {
			name: this._name,
			classType: this.classType,
			key: this.textureKey
		})

		for(let e of spawnPoints) {
			this.targetList.unshift(e)
		}

		console.log(this._name, this.targetList)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
