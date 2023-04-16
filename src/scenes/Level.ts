// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LayerPhysics from "../components/LayerPhysics";
import Player from "../prefabs/Player";
import TimerBar from "../prefabs/TimerBar";
import OnKeyBoardJustDownScript from "../prefabs/scriptNodes/OnKeyBoardJustDownScript";
import ScriptNode from "../prefabs/scriptNodes/ScriptNode";
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

		// startLevel
		const startLevel = this.add.tilemap("startLevel");
		startLevel.addTilesetImage("Terrain (16x16)", "Terrain (16x16)");
		startLevel.addTilesetImage("Clouds V2-2", "Clouds_V2-2");

		// background_1
		startLevel.createLayer("background", ["Clouds V2-2"], 0, 0);

		// ground_1
		const ground_1 = startLevel.createLayer("ground", ["Terrain (16x16)"], 0, 0);

		// player_1
		const player_1 = new Player(this, 110, 148);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

		// spritesheet_UI_Flat157
		const spritesheet_UI_Flat157 = new TimerBar(this, 129, 33);
		this.add.existing(spritesheet_UI_Flat157);

		// onKeyBoardJustDownScript
		const onKeyBoardJustDownScript = new OnKeyBoardJustDownScript(this);

		// debugScript
		const debugScript = new ScriptNode(onKeyBoardJustDownScript);

		// collider
		const collider = this.physics.add.collider(player_1, ground_1);

		// ground_1 (components)
		new LayerPhysics(ground_1);

		// onKeyBoardJustDownScript (prefab fields)
		onKeyBoardJustDownScript.keyBoardKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		this.player_1 = player_1;
		this.spritesheet_UI_Flat157 = spritesheet_UI_Flat157;
		this.onKeyBoardJustDownScript = onKeyBoardJustDownScript;
		this.debugScript = debugScript;
		this.collider = collider;
		this.startLevel = startLevel;

		this.events.emit("scene-awake");
	}

	private player_1!: Player;
	private spritesheet_UI_Flat157!: TimerBar;
	private onKeyBoardJustDownScript!: OnKeyBoardJustDownScript;
	private debugScript!: ScriptNode;
	private collider!: Phaser.Physics.Arcade.Collider;
	private startLevel!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */
	private WKey?: Phaser.Input.Keyboard.Key
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
	private theme?: Phaser.Sound.BaseSound

	// Write your code here
	create() {

		this.editorCreate();

		this.cameras.main.setBounds(0, 0, 640*10, 320*2)

		// Add the menu theme to scene
		this.theme = this.sound.add('menu-theme', {
			loop: true
		})

		this.debugScript.execute = () => {
			if(!this.theme?.isPlaying) {
				this.theme?.play()
			}
			else if (this.theme?.isPlaying) {
				this.theme.pause()
			}

		}
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