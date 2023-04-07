// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "../prefabs/Player";
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

	editorCreate(): void {

		// player_1
		const player_1 = new Player(this, 231, 187);
		this.add.existing(player_1);
		player_1.scaleX = 5;
		player_1.scaleY = 5;

		this.player_1 = player_1;

		this.events.emit("scene-awake");
	}

	private player_1!: Player;

	/* START-USER-CODE */

	// Write your code here

	preload()
	{
		this.load.pack('assetsPack', '../assets/asset-pack.json');
	}

	create() {
		// const map = this.make.tilemap({ key: "map" });

		// const tilesetBackground = map.addTilesetImage("Gray", "tilesBackground");
		// const tilesetTerrian = map.addTilesetImage("Terrain (16x16)", "tilesFloor");

		// map.createLayer("Background", tilesetBackground, 0, 0);
 		// const foregroundLayer = map.createLayer("Foreground", tilesetTerrian, 0, 0);
		// foregroundLayer.setCollisionByProperty({ collides: true });

		// // Create character sprite
  		// this.character = this.physics.add.sprite(100, 100, "characterIdle");

		// this.anims.create({
		// 	key: "idle",
		// 	frames: this.anims.generateFrameNumbers("characterIdle", { start: 0, end: 3 }),
		// 	frameRate: 10,
		// 	repeat: -1
		// });

		// this.anims.create({
		// 	key: "run",
		// 	frames: this.anims.generateFrameNumbers("characterRun", { start: 0, end: 7 }),
		// 	frameRate: 15,
		// 	repeat: -1
		//   });

		// this.anims.create({
		// 	key: "jump",
		// 	frames: this.anims.generateFrameNumbers("characterJump", { start: 0, end: 0 }),
		// 	frameRate: 10,
		// 	repeat: -1
		// });

		// this.anims.create({
		// 	key: "fall",
		// 	frames: this.anims.generateFrameNumbers("characterFall", { start: 0, end: 0 }),
		// 	frameRate: 10,
		// 	repeat: -1
		// });

		// // Create and store keyboard input
   		// this.cursors = this.input.keyboard.addKeys({
		//  up: Phaser.Input.Keyboard.KeyCodes.W,
		//  left: Phaser.Input.Keyboard.KeyCodes.A,
		//  right: Phaser.Input.Keyboard.KeyCodes.D,
		// });

		// // Play idle animation by default
  		// this.character.anims.play("idle");
		// this.physics.add.collider(this.character, foregroundLayer);

		this.editorCreate();

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