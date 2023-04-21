// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LayerPhysics from "../components/LayerPhysics";
import Player from "../prefabs/Player";
import FireHydrant from "../prefabs/FireHydrant";
import Goal from "../prefabs/Goal";
import News from "../prefabs/News";
import OnKeyBoardJustDownScript from "../prefabs/scriptNodes/OnKeyBoardJustDownScript";
import AudioAddNode from "../prefabs/scriptNodes/AudioAddNode";
import CameraBounds from "../prefabs/scriptNodes/CameraBounds";
/* START-USER-IMPORTS */
import { ANIM_P_RUN, ANIM_P_DBL_JUMP } from "../animations";
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

		// player_1
		const player_1 = new Player(this, 110, 148);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

		// firehydrant
		const firehydrant = new FireHydrant(this, 711, 175);
		this.add.existing(firehydrant);

		// house2
		const house2 = new Goal(this, 1137, 84);
		this.add.existing(house2);

		// newspaper
		const newspaper = new News(this, 189, 163);
		this.add.existing(newspaper);

		// onKeyBoardJustDownScript
		const onKeyBoardJustDownScript = new OnKeyBoardJustDownScript(this);

		// AudioAddNode
		const audioAddNode = new AudioAddNode(this);

		// CameraBounds
		const cameraBounds = new CameraBounds(this);

		// player_ground
		const player_ground = this.physics.add.collider(player_1, ground_1);

		// ground_1 (components)
		new LayerPhysics(ground_1);

		// onKeyBoardJustDownScript (prefab fields)
		onKeyBoardJustDownScript.keyBoardKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// audioAddNode (prefab fields)
		audioAddNode.audioKey = "theme_1";

		// cameraBounds (prefab fields)
		cameraBounds.x = 0;
		cameraBounds.y = 0;
		cameraBounds.boundWidth = 6400;
		cameraBounds.boundHeight = 640;

		this.ground_1 = ground_1;
		this.player_1 = player_1;
		this.firehydrant = firehydrant;
		this.house2 = house2;
		this.newspaper = newspaper;
		this.onKeyBoardJustDownScript = onKeyBoardJustDownScript;
		this.audioAddNode = audioAddNode;
		this.cameraBounds = cameraBounds;
		this.player_ground = player_ground;
		this.lv1 = lv1;

		this.events.emit("scene-awake");
	}

	private ground_1!: Phaser.Tilemaps.TilemapLayer;
	private player_1!: Player;
	private firehydrant!: FireHydrant;
	private house2!: Goal;
	private newspaper!: News;
	private onKeyBoardJustDownScript!: OnKeyBoardJustDownScript;
	private audioAddNode!: AudioAddNode;
	private cameraBounds!: CameraBounds;
	private player_ground!: Phaser.Physics.Arcade.Collider;
	private lv1!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */
	// Write your code here
	init(data: object) {
		console.log('init', data)
	}

	create() {

		this.editorCreate();

		const theme = this.audioAddNode._g_audio

		this.time.delayedCall(300, () => {
			theme?.play()
		})



		// this.debugScript.execute = () => {
		// 	if(!this.theme?.isPlaying) {
		// 		this.theme?.play()
		// 	}
		// 	else if (this.theme?.isPlaying) {
		// 		this.theme.pause()
		// 	}

		// }
		// Create and store keyboard input
		// this.WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	}

	update() {

		// if (this.WKey && this.theme && Phaser.Input.Keyboard.JustDown(this.WKey)) {
		// 	console.log('W Key is just pressed')
		// 	if(!this.theme.isPlaying)
		// 	{
		// 		this.theme.play()
		// 	}
		// 	else if (this.theme.isPlaying)
		// 	{
		// 		this.theme.pause()
		// 	}
		// }

    	// if (this.cursors.left.isDown) {
        // 	this.character.setVelocityX(-200);
        // 	this.character.anims.play("run", true);
        // 	this.character.flipX = true;
    	// } else if (this.cursors.right.isDown) {
		// 	this.character.setVelocityX(200);
		// 	this.character.anims.play("run", true);
		// 	this.character.flipX = false;
		// } else {
		// 	this.character.setVelocityX(0);
		// 	this.character.anims.play("idle", true);
		// }

		// // Jumping
		// if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.character.body.onFloor()) {
		// 	this.character.setVelocityY(-350);
		// }

		// // Jump and fall animations
		// if (this.character.body.velocity.y < 0) {
		// 	this.character.anims.play("jump", true);
		// } else if (this.character.body.velocity.y > 0 && !this.character.body.touching.down) {
		// 	this.character.anims.play("fall", true);
		// }
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here