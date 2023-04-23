
// You can write more code here
//@ts-nocheck

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LayerPhysics from "../components/LayerPhysics";
import FireHydrant from "../prefabs/FireHydrant";
import Goal from "../prefabs/Goal";
import Newspaper from "../prefabs/Newspaper";
import Player from "../prefabs/Player";
import LevelBehavior from "../prefabs/scriptNodes/LevelBehavior";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level2 extends Phaser.Scene {

	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("preload-asset-pack", "assets/preload-asset-pack.json");
	}

	editorCreate(): void {

		// lv2
		const lv2 = this.add.tilemap("lv2");
		lv2.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		lv2.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// background_1
		lv2.createLayer("background", ["Clouds V2-2"], 0, 0);

		// ground_1
		const ground_1 = lv2.createLayer("ground", ["Terrain (16x16)"], 0, 0);

		// fireHydrant
		const fireHydrant = new FireHydrant(this, 725, 144);
		this.add.existing(fireHydrant);

		// fireHydrant_1
		const fireHydrant_1 = new FireHydrant(this, 867, 144);
		this.add.existing(fireHydrant_1);

		// fireHydrant_2
		const fireHydrant_2 = new FireHydrant(this, 244, 193);
		this.add.existing(fireHydrant_2);

		// fireHydrant_3
		const fireHydrant_3 = new FireHydrant(this, 368, 193);
		this.add.existing(fireHydrant_3);

		// fireHydrant_4
		const fireHydrant_4 = new FireHydrant(this, 549, 193);
		this.add.existing(fireHydrant_4);

		// goal
		const goal = new Goal(this, 979, 49);
		this.add.existing(goal);

		// newspaper
		const newspaper = new Newspaper(this, 312, 149);
		this.add.existing(newspaper);

		// player_1
		const player_1 = new Player(this, 110, 140);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

		// levelBehavior
		const levelBehavior = new LevelBehavior(this);

		// lists
		const hydrantList = [fireHydrant, fireHydrant_4, fireHydrant_3, fireHydrant_2, fireHydrant_1];
		const bottom = [fireHydrant_4, fireHydrant_3, fireHydrant_2];
		const top = [fireHydrant_1, fireHydrant];

		// ground_1 (components)
		new LayerPhysics(ground_1);

		// levelBehavior (prefab fields)
		levelBehavior.player = player_1;
		levelBehavior.groundLayer = ground_1;
		levelBehavior.hydrantList = hydrantList;
		levelBehavior.goal = goal;
		levelBehavior.newspaper = newspaper;

		this.player_1 = player_1;
		this.lv2 = lv2;
		this.hydrantList = hydrantList;
		this.bottom = bottom;
		this.top = top;

		this.events.emit("scene-awake");
	}

	private player_1!: Player;
	private lv2!: Phaser.Tilemaps.Tilemap;
	private hydrantList!: FireHydrant[];
	private bottom!: FireHydrant[];
	private top!: FireHydrant[];

	/* START-USER-CODE */

	// Write your code here
	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
