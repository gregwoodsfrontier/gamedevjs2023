
// You can write more code here
//@ts-nocheck
/* START OF COMPILED CODE */

import Phaser from "phaser";
import AddPhysicsToTileLayer from "../prefabs/scriptNodes/AddPhysicsToTileLayer";
import FireHydrant from "../prefabs/FireHydrant";
import Goal from "../prefabs/Goal";
import Newspaper from "../prefabs/Newspaper";
import Player from "../prefabs/Player";
import LevelBehavior from "../prefabs/scriptNodes/LevelBehavior";
import CreateFromObjectsNode from "../prefabs/scriptNodes/CreateFromObjectsNode";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level3 extends Phaser.Scene {

	constructor() {
		super("Level3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("preload-asset-pack", "assets/preload-asset-pack.json");
	}

	editorCreate(): void {

		// level3
		const level3 = this.add.tilemap("level3");
		level3.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		level3.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// background_1
		level3.createLayer("background", ["Clouds V2-2","Terrain (16x16)"], 0, 0);

		// ground_1
		const ground_1 = level3.createLayer("ground", ["Terrain (16x16)"], 0, 0);

		// addPhysicsToTileLayer
		new AddPhysicsToTileLayer(ground_1);

		// fireHydrant
		const fireHydrant = new FireHydrant(this, -44, 141);
		this.add.existing(fireHydrant);
		fireHydrant.body.enable = false;

		// goal
		const goal = new Goal(this, -129, 130);
		this.add.existing(goal);
		goal.body.enable = false;

		// newspaper
		const newspaper = new Newspaper(this, -50, 95);
		this.add.existing(newspaper);
		newspaper.body.enable = false;

		// player_1
		const player_1 = new Player(this, 205, 279);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

		// levelBehavior
		const levelBehavior = new LevelBehavior(this);

		// houseNode
		const houseNode = new CreateFromObjectsNode(this);

		// paperNode
		const paperNode = new CreateFromObjectsNode(this);

		// hydrantNode
		const hydrantNode = new CreateFromObjectsNode(this);

		// lists
		const hydrantList = [fireHydrant];
		const paperList = [newspaper];
		const houseList = [goal];

		// levelBehavior (prefab fields)
		levelBehavior.player = player_1;
		levelBehavior.groundLayer = ground_1;
		levelBehavior.hydrantList = hydrantList;
		levelBehavior.goal = houseList;
		levelBehavior.newspaper = paperList;

		// houseNode (prefab fields)
		houseNode._name = "House";
		houseNode.classType = Goal;
		houseNode.textureKey = "house2";
		houseNode.targetList = houseList;
		houseNode.tilemapSrce = level3;

		// paperNode (prefab fields)
		paperNode._name = "Newspaper";
		paperNode.classType = Newspaper;
		paperNode.textureKey = "newspaper";
		paperNode.targetList = paperList;
		paperNode.tilemapSrce = level3;

		// hydrantNode (prefab fields)
		hydrantNode._name = "FireHydrant";
		hydrantNode.classType = FireHydrant;
		hydrantNode.textureKey = "firehydrant";
		hydrantNode.targetList = hydrantList;
		hydrantNode.tilemapSrce = level3;

		this.player_1 = player_1;
		this.level3 = level3;
		this.hydrantList = hydrantList;
		this.paperList = paperList;
		this.houseList = houseList;

		this.events.emit("scene-awake");
	}

	private player_1!: Player;
	private level3!: Phaser.Tilemaps.Tilemap;
	private hydrantList!: FireHydrant[];
	private paperList!: Newspaper[];
	private houseList!: Goal[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.setCamWorldBounds(this.level3)
	}

	private setCamWorldBounds(map: Phaser.Tilemaps.Tilemap) {
		this.cameras.main.setBounds(0, 0, map.width * 16, map.height * 16)

		this.physics.world.setBounds(0, 0, map.width * 16, map.width * 16)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
