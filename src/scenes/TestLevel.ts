
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LayerPhysics from "../components/LayerPhysics";
import Newspaper from "../prefabs/Newspaper";
import Goal from "../prefabs/Goal";
import Player from "../prefabs/Player";
import FireHydrant from "../prefabs/FireHydrant";
import LevelBehavior from "../prefabs/scriptNodes/LevelBehavior";
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
		const ground_1 = testLevel.createLayer("ground", ["Terrain (16x16)"], 0, 0);

		// newspaper
		const newspaper = new Newspaper(this, 192, 111);
		this.add.existing(newspaper);

		// goal
		const goal = new Goal(this, 1044, 6);
		this.add.existing(goal);

		// player
		const player = new Player(this, 63, 151);
		this.add.existing(player);

		// fireHydrant
		const fireHydrant = new FireHydrant(this, 137, 140);
		this.add.existing(fireHydrant);

		// levelBehavior
		const levelBehavior = new LevelBehavior(this);

		// lists
		const hydrantList = [fireHydrant];

		// ground_1 (components)
		new LayerPhysics(ground_1);

		// levelBehavior (prefab fields)
		levelBehavior.player = player;
		levelBehavior.groundLayer = ground_1;
		levelBehavior.hydrantList = hydrantList;
		levelBehavior.goal = goal;
		levelBehavior.newspaper = newspaper;

		this.testLevel = testLevel;
		this.hydrantList = hydrantList;

		this.events.emit("scene-awake");
	}

	private testLevel!: Phaser.Tilemaps.Tilemap;
	private hydrantList!: FireHydrant[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const fireHydrantPoints = this.testLevel.createFromObjects("Objects", {
			name: "FireHydrant",
			classType: FireHydrant,
			key: "firehydrant"
		})

		for(let fh of fireHydrantPoints) {
			this.hydrantList.push(fh as FireHydrant)
		}

		console.log("get newspaper obj",this.testLevel.findObject("Objects", e => e.name === "Newspaper", this))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
