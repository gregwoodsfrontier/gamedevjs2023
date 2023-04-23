
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "../prefabs/Player";
import Newspaper from "../prefabs/Newspaper";
import Goal from "../prefabs/Goal";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TestLevel extends Phaser.Scene {

	constructor() {
		super("TestLevel");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// testLevel
		const testLevel = this.add.tilemap("testLevel");
		testLevel.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		testLevel.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// ground_1
		testLevel.createLayer("ground", ["Terrain (16x16)"], 0, 0);

		// player
		const player = new Player(this, 63, 151);
		this.add.existing(player);

		// newspaper
		const newspaper = new Newspaper(this, 192, 111);
		this.add.existing(newspaper);

		// goal
		const goal = new Goal(this, 1044, 6);
		this.add.existing(goal);

		this.testLevel = testLevel;

		this.events.emit("scene-awake");
	}

	private testLevel!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
