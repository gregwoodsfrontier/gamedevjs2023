
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Player from "../Player";
import PlayerContainer from "../PlayerContainer";
import FireHydrant from "../FireHydrant";
import Newspaper from "../Newspaper";
import Goal from "../Goal";
/* END-USER-IMPORTS */

export default class LevelBehavior extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public player!: Player;
	public groundLayer!: any;
	public hydrantList!: FireHydrant[];
	public goal!: Goal;
	public newspaper!: Newspaper;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		const {scene} = this

		scene.physics.add.collider(this.newspaper, this.groundLayer)
		scene.physics.add.collider(this.hydrantList, this.groundLayer)
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
