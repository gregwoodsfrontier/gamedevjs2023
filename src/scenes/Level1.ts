
// You can write more code here
//@ts-nocheck

/* START OF COMPILED CODE */

import Phaser from "phaser";
import AddPhysicsToTileLayer from "../prefabs/scriptNodes/AddPhysicsToTileLayer";
import Newspaper from "../prefabs/Newspaper";
import Goal from "../prefabs/Goal";
import FireHydrant from "../prefabs/FireHydrant";
import Player from "../prefabs/Player";
import TunnelZone from "../prefabs/TunnelZone";
import PlayerContainer from "../prefabs/PlayerContainer";
import LevelBehavior from "../prefabs/scriptNodes/LevelBehavior";
import CreateFromObjectsNode from "../prefabs/scriptNodes/CreateFromObjectsNode";
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
		const player = new Player(this, 143, 152);
		this.add.existing(player);

		// tunnel_1
		const tunnel_1 = new TunnelZone(this, 384, 208);
		this.add.existing(tunnel_1);

		// tunnelZone
		const tunnelZone = new TunnelZone(this, 688, 176);
		this.add.existing(tunnelZone);

		// playerContainer
		const playerContainer = new PlayerContainer(this, 509, 174);
		this.add.existing(playerContainer);

		// levelBehavior
		const levelBehavior = new LevelBehavior(this);

		// fireHydrantNode
		const fireHydrantNode = new CreateFromObjectsNode(this);

		// newspaperNode
		const newspaperNode = new CreateFromObjectsNode(this);

		// houseNode
		const houseNode = new CreateFromObjectsNode(this);

		// lists
		const hydrantList = [fireHydrant];
		const goalList = [goal];
		const newspaperList = [newspaper];
		const tunnelList = [tunnel_1, tunnelZone];

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

		this.ground_1 = ground_1;
		this.player = player;
		this.playerContainer = playerContainer;
		this.level1map = level1map;
		this.hydrantList = hydrantList;
		this.goalList = goalList;
		this.newspaperList = newspaperList;
		this.tunnelList = tunnelList;

		this.events.emit("scene-awake");
	}

	private ground_1!: Phaser.Tilemaps.TilemapLayer;
	private player!: Player;
	public playerContainer!: PlayerContainer;
	private level1map!: Phaser.Tilemaps.Tilemap;
	private hydrantList!: FireHydrant[];
	private goalList!: Goal[];
	private newspaperList!: Newspaper[];
	public tunnelList!: TunnelZone[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		for(let tunnel of this.tunnelList) {
			// const zone = this.add.zone(tunnel.x, tunnel.y, tunnel.width, tunnel.height)
			this.matter.add.existing(tunnel, true)

			// zone.body.enable = true
			// (zone.body as Phaser.Physics.Arcade.Body).moves = false
		}	

		this.setCamWorldBounds(this.level1map)
	}

	private setCamWorldBounds(map: Phaser.Tilemaps.Tilemap) {
		this.cameras.main.setBounds(0, 0, map.width * 16, map.height * 16)

		this.matter.world.setBounds(0, 0, map.width * 16, map.width * 16)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
