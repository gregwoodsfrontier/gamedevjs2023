// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LayerPhysics from "../components/LayerPhysics";
import Goal from "../prefabs/Goal";
import Newspaper from "../prefabs/Newspaper";
import FireHydrant from "../prefabs/FireHydrant";
import Player from "../prefabs/Player";
import LevelBehavior from "../prefabs/scriptNodes/LevelBehavior";
/* START-USER-IMPORTS */
import { ANIM_P_RUN, ANIM_P_DBL_JUMP } from "../animations";
import eventsCenter from "../eventCenter";
import { PAUSE_GAME, RESUME_GAME } from "../prefabs/scriptNodes/onPauseScreenNode";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("preload-asset-pack", "assets/preload-asset-pack.json");
	}

	editorCreate(): void {

		// lv1
		const lv1 = this.add.tilemap("lv1");
		lv1.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		lv1.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// background_1
		lv1.createLayer("background", ["Clouds V2-2"], 0, 0);

		// ground_1
		const ground_1 = lv1.createLayer("ground", ["Terrain (16x16)"], 0, 0);
		ground_1.name = "ground_1";

		// house2
		const house2 = new Goal(this, 1145, 64);
		this.add.existing(house2);
		house2.scaleX = 2;
		house2.scaleY = 2;

		// newspaper
		const newspaper = new Newspaper(this, 189, 167);
		this.add.existing(newspaper);

		// fireHydrant
		const fireHydrant = new FireHydrant(this, 310, 191);
		this.add.existing(fireHydrant);

		// fireHydrant_1
		const fireHydrant_1 = new FireHydrant(this, 542, 191);
		this.add.existing(fireHydrant_1);

		// player_1
		const player_1 = new Player(this, 110, 148);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

		// LevelBehavior
		const levelBehavior = new LevelBehavior(this);

		// lists
		const hydrantList = [fireHydrant, fireHydrant_1];

		// ground_1 (components)
		new LayerPhysics(ground_1);

		// levelBehavior (prefab fields)
		levelBehavior.player = player_1;
		levelBehavior.groundLayer = ground_1;
		levelBehavior.hydrantList = hydrantList;
		levelBehavior.goal = house2;
		levelBehavior.newspaper = newspaper;

		this.house2 = house2;
		this.newspaper = newspaper;
		this.fireHydrant = fireHydrant;
		this.fireHydrant_1 = fireHydrant_1;
		this.player_1 = player_1;
		this.lv1 = lv1;
		this.hydrantList = hydrantList;

		this.events.emit("scene-awake");
	}

	private house2!: Goal;
	private newspaper!: Newspaper;
	private fireHydrant!: FireHydrant;
	private fireHydrant_1!: FireHydrant;
	private player_1!: Player;
	private lv1!: Phaser.Tilemaps.Tilemap;
	private hydrantList!: FireHydrant[];

	/* START-USER-CODE */
	// Write your code here

	create() {

		this.editorCreate();	
	}

	update() {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here