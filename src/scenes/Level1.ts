
// You can write more code here
//@ts-nocheck

/* START OF COMPILED CODE */

import Phaser from "phaser";
import AddPhysicsToTileLayer from "../prefabs/scriptNodes/AddPhysicsToTileLayer";
import Newspaper from "../prefabs/Newspaper";
import Goal from "../prefabs/Goal";
import FireHydrant from "../prefabs/FireHydrant";
import PlayerContainer from "../prefabs/PlayerContainer";
import LevelBehavior from "../prefabs/scriptNodes/LevelBehavior";
import CreateFromObjectsNode from "../prefabs/scriptNodes/CreateFromObjectsNode";
import CheckTopTile from "../prefabs/scriptNodes/CheckTopTile";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// level1map
		const level1map = this.add.tilemap("testLevel");
		level1map.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		level1map.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// background_1
		level1map.createLayer("background", ["Clouds V2-2"], 0, 0);

		// ground_1
		const ground_1 = level1map.createLayer("ground", ["Terrain (16x16)"], 0, 0);

		// addPhysicsToTileLayer
		new AddPhysicsToTileLayer(ground_1);

		// newspaper
		const newspaper = new Newspaper(this, 399, -23);
		this.add.existing(newspaper);
		newspaper.body.enable = false;

		// goal
		const goal = new Goal(this, 492, -56);
		this.add.existing(goal);
		goal.body.enable = false;

		// fireHydrant
		const fireHydrant = new FireHydrant(this, 350, -25);
		this.add.existing(fireHydrant);
		fireHydrant.body.enable = false;

		// player
		const player = new PlayerContainer(this, 63, 151);
		this.add.existing(player);

		// levelBehavior
		const levelBehavior = new LevelBehavior(this);

		// fireHydrantNode
		const fireHydrantNode = new CreateFromObjectsNode(this);

		// newspaperNode
		const newspaperNode = new CreateFromObjectsNode(this);

		// houseNode
		const houseNode = new CreateFromObjectsNode(this);

		// checkTopTile
		const checkTopTile = new CheckTopTile(this);

		// lists
		const hydrantList = [fireHydrant];
		const goalList = [goal];
		const newspaperList = [newspaper];

		// levelBehavior (prefab fields)
		levelBehavior.player = player;
		levelBehavior.groundLayer = ground_1;
		levelBehavior.hydrantList = hydrantList;
		levelBehavior.goal = goalList;
		levelBehavior.newspaper = newspaperList;

		// fireHydrantNode (prefab fields)
		fireHydrantNode._name = "FireHydrant";
		fireHydrantNode.classType = FireHydrant;
		fireHydrantNode.textureKey = "firehydrant";
		fireHydrantNode.targetList = hydrantList;
		fireHydrantNode.tilemapSrce = level1map;

		// newspaperNode (prefab fields)
		newspaperNode._name = "Newspaper";
		newspaperNode.classType = Newspaper;
		newspaperNode.textureKey = "newspaper";
		newspaperNode.targetList = newspaperList;
		newspaperNode.tilemapSrce = level1map;

		// houseNode (prefab fields)
		houseNode._name = "House";
		houseNode.classType = Goal;
		houseNode.textureKey = "house2";
		houseNode.targetList = goalList;
		houseNode.tilemapSrce = level1map;

		// checkTopTile (prefab fields)
		checkTopTile.layer = ground_1;
		checkTopTile.getPlayer = player;

		this.ground_1 = ground_1;
		this.level1map = level1map;
		this.hydrantList = hydrantList;
		this.goalList = goalList;
		this.newspaperList = newspaperList;

		this.events.emit("scene-awake");
	}

	private ground_1!: Phaser.Tilemaps.TilemapLayer;
	private level1map!: Phaser.Tilemaps.Tilemap;
	private hydrantList!: FireHydrant[];
	private goalList!: Goal[];
	private newspaperList!: Newspaper[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.setCamWorldBounds(this.level1map)
	}

	private setCamWorldBounds(map: Phaser.Tilemaps.Tilemap) {
		this.cameras.main.setBounds(0, 0, map.width * 16, map.height * 16)

		this.physics.world.setBounds(0, 0, map.width * 16, map.width * 16)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
