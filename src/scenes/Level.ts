// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Goal from "../prefabs/Goal";
import Newspaper from "../prefabs/Newspaper";
import FireHydrant from "../prefabs/FireHydrant";
import Player from "../prefabs/Player";
import CameraBounds from "../prefabs/scriptNodes/CameraBounds";
import OnKeyBoardJustDownScript from "../prefabs/scriptNodes/OnKeyBoardJustDownScript";
import AudioAddNode from "../prefabs/scriptNodes/AudioAddNode";
/* START-USER-IMPORTS */
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

		// lv
		const lv = this.add.tilemap("lv1");
		lv.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		lv.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// lv_1
		const lv_1 = this.add.tilemap("lv1");
		lv_1.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		lv_1.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// background_1
		lv_1.createLayer("background", ["Clouds V2-2"], 0, 0);

		// ground_1
		lv.createLayer("ground", ["Terrain (16x16)"], 0, 0);

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

		// player_1
		const player_1 = new Player(this, 110, 148);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

		// CameraBounds
		const cameraBounds = new CameraBounds(this);

		// onKeyBoardJustDownScript
		const onKeyBoardJustDownScript = new OnKeyBoardJustDownScript(this);

		// AudioAddNode
		const audioAddNode = new AudioAddNode(this);

		// player_ground
		const player_ground = this.physics.add.collider(player_1, ground_1);

		// hydrantCollide
		const hydrantCollide = this.physics.add.collider(player_1, fireHydrant, this.handlePlayerHydrant, undefined, this);

		// cameraBounds (prefab fields)
		cameraBounds.x = 0;
		cameraBounds.y = 0;
		cameraBounds.boundWidth = 6400;
		cameraBounds.boundHeight = 640;

		// onKeyBoardJustDownScript (prefab fields)
		onKeyBoardJustDownScript.keyBoardKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// audioAddNode (prefab fields)
		audioAddNode.audioKey = "theme_1";

		this.house2 = house2;
		this.newspaper = newspaper;
		this.fireHydrant = fireHydrant;
		this.player_1 = player_1;
		this.cameraBounds = cameraBounds;
		this.onKeyBoardJustDownScript = onKeyBoardJustDownScript;
		this.audioAddNode = audioAddNode;
		this.player_ground = player_ground;
		this.lv1 = lv1;
		this.lv = lv;
		this.lv_1 = lv_1;
		this.hydrantCollide = hydrantCollide;

		this.events.emit("scene-awake");
	}

	private house2!: Goal;
	private newspaper!: Newspaper;
	private fireHydrant!: FireHydrant;
	private player_1!: Player;
	private cameraBounds!: CameraBounds;
	private onKeyBoardJustDownScript!: OnKeyBoardJustDownScript;
	private audioAddNode!: AudioAddNode;
	private player_ground!: Phaser.Physics.Arcade.Collider;
	private lv1!: Phaser.Tilemaps.Tilemap;
	private lv!: Phaser.Tilemaps.Tilemap;
	private lv_1!: Phaser.Tilemaps.Tilemap;
	private hydrantCollide!: Phaser.Physics.Arcade.Collider;

	/* START-USER-CODE */
	// Write your code here
	init(data: object) {
		console.log('init', data)
	}

	create() {

		this.editorCreate();

		this.physics.add.collider(this.newspaper, this.ground_1)
		this.physics.add.collider(this.fireHydrant, this.ground_1)

		//@ts-ignore
		const p_news = this.physics.add.collider(this.player_1, this.newspaper, this.handlePlayerNewsPaper)
		//@ts-ignore
		// const p_firehydrant = this.physics.add.collider(this.player_1, this.fireHydrant, this.handlePlayerHydrant)

		const p_goal = this.physics.add.collider(this.player_1, this.house2)

		const theme = this.audioAddNode._g_audio

		this.time.delayedCall(300, () => {
			theme?.play()
		})
	}

	handlePlayerNewsPaper(player: Player, newspaper: Newspaper) {
		newspaper.disableBody(true, true)
		player.equip(1)
	}

	handlePlayerHydrant(player: Player, hydrant: FireHydrant) {
		console.log(`player touch fire hydrant`)
		player.pee()
		hydrant.disableBody()
	}

	update() {
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here