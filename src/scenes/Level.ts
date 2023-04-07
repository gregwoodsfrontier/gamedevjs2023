// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "../prefabs/Player";
import LayerPhysics from "../components/LayerPhysics";
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

		// level1
		const level1 = this.add.tilemap("Level1");
		level1.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");

		// player_1
		const player_1 = new Player(this, 174, 134);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

		// border_1
		const border_1 = level1.createLayer("border", ["Terrain (16x16)"], 0, 0);

		// ground_1
		const ground_1 = level1.createLayer("ground", ["Terrain (16x16)"], 0, 0);

		// block_1
		const block_1 = level1.createLayer("block", ["Terrain (16x16)"], 0, 0);

		// border_1 (components)
		new LayerPhysics(border_1);

		// ground_1 (components)
		new LayerPhysics(ground_1);

		// block_1 (components)
		new LayerPhysics(block_1);

		this.player_1 = player_1;
		this.border_1 = border_1;
		this.ground_1 = ground_1;
		this.block_1 = block_1;
		this.level1 = level1;

		this.events.emit("scene-awake");
	}

	private player_1!: Player;
	private border_1!: Phaser.Tilemaps.TilemapLayer;
	private ground_1!: Phaser.Tilemaps.TilemapLayer;
	private block_1!: Phaser.Tilemaps.TilemapLayer;
	private level1!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */
	private WASDcursors?: object
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

	// Write your code here
	create() {

		// Create and store keyboard input
   		this.WASDcursors = this.input.keyboard.addKeys({
		 up: Phaser.Input.Keyboard.KeyCodes.W,
		 left: Phaser.Input.Keyboard.KeyCodes.A,
		 right: Phaser.Input.Keyboard.KeyCodes.D,
		});

		this.cursors = this.input.keyboard.createCursorKeys()

		this.editorCreate();

		const theme = this.sound.add('menu-theme')

		theme.play()
	}

	update() {
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