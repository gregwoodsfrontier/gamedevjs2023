
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LayerPhysics from "../components/LayerPhysics";
import Player from "../prefabs/Player";
import OnKeyBoardJustDownScript from "../prefabs/scriptNodes/OnKeyBoardJustDownScript";
import ScriptNode from "../prefabs/scriptNodes/ScriptNode";
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

		// player_1
		const player_1 = new Player(this, 110, 140);
		this.add.existing(player_1);
		player_1.scaleX = 1;
		player_1.scaleY = 1;

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
		this.onKeyBoardJustDownScript = onKeyBoardJustDownScript;
		this.debugScript = debugScript;
		this.collider = collider;
		this.lv2 = lv2;

		this.events.emit("scene-awake");
	}

	private player_1!: Player;
	private onKeyBoardJustDownScript!: OnKeyBoardJustDownScript;
	private debugScript!: ScriptNode;
	private collider!: Phaser.Physics.Arcade.Collider;
	private lv2!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

	// Write your code here
	private WKey?: Phaser.Input.Keyboard.Key
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
	private theme?: Phaser.Sound.BaseSound

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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
