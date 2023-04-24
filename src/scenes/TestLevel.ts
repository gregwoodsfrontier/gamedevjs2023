
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LayerPhysics from "../components/LayerPhysics";
import Newspaper from "../prefabs/Newspaper";
import Goal from "../prefabs/Goal";
import FireHydrant from "../prefabs/FireHydrant";
import Player from "../prefabs/Player";
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
		const newspaper = new Newspaper(this, 399, -23);
		this.add.existing(newspaper);

		// goal
		const goal = new Goal(this, 400, -51);
		this.add.existing(goal);

		// fireHydrant
		const fireHydrant = new FireHydrant(this, 400, -33);
		this.add.existing(fireHydrant);

		// player
		const player = new Player(this, 63, 151);
		this.add.existing(player);

		// levelBehavior
		const levelBehavior = new LevelBehavior(this);

		// lists
		const hydrantList = [fireHydrant];
		const goalList = [goal];
		const newspaperList = [newspaper];

		// ground_1 (components)
		new LayerPhysics(ground_1);

		// levelBehavior (prefab fields)
		levelBehavior.player = player;
		levelBehavior.groundLayer = ground_1;
		levelBehavior.hydrantList = hydrantList;
		levelBehavior.goal = goalList;
		levelBehavior.newspaper = newspaperList;

		this.testLevel = testLevel;
		this.hydrantList = hydrantList;
		this.goalList = goalList;
		this.newspaperList = newspaperList;

		this.events.emit("scene-awake");
	}

	private testLevel!: Phaser.Tilemaps.Tilemap;
	private hydrantList!: FireHydrant[];
	private goalList!: Goal[];
	private newspaperList!: Newspaper[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const fireHydrantPoints = this.testLevel.createFromObjects("Objects", {
			name: "FireHydrant",
			classType: FireHydrant,
			key: "firehydrant"
		})

		const npPoints = this.testLevel.createFromObjects("Objects", {
			name: "Newspaper",
			classType: Newspaper,
			key: "newspaper"
		})

		const housePoints = this.testLevel.createFromObjects("Objects", {
			name: "House",
			classType: Goal,
			key: "house2"
		})

		for(let fh of fireHydrantPoints) {
			this.hydrantList.push(fh as FireHydrant)
		}

		for(let np of npPoints) {
			this.newspaperList.push(np as Newspaper)
		}

		for(let h of housePoints) {
			// console.log(h)
			this.goalList.push(h as Goal)
		}

		// console.warn(this.goalList[1].body)

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
