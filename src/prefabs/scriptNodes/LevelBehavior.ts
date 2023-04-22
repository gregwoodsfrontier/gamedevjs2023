
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
import CameraBounds from "./CameraBounds";
import WorldBounds from "./WorldBounds";
import AudioAddNode from "./AudioAddNode";
/* START-USER-IMPORTS */
import Player from "../Player";
import PlayerContainer from "../PlayerContainer";
import FireHydrant from "../FireHydrant";
import Newspaper from "../Newspaper";
import Goal from "../Goal";
/* END-USER-IMPORTS */

export default class LevelBehavior extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// cameraBounds
		const cameraBounds = new CameraBounds(this);

		// worldBounds
		const worldBounds = new WorldBounds(this);

		// audioAddNode
		const audioAddNode = new AudioAddNode(this);

		// audioAddNode (prefab fields)
		audioAddNode.audioKey = "theme_1";

		this.cameraBounds = cameraBounds;
		this.worldBounds = worldBounds;
		this.audioAddNode = audioAddNode;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private cameraBounds: CameraBounds;
	private worldBounds: WorldBounds;
	private audioAddNode: AudioAddNode;
	public player!: Player;
	public groundLayer!: Phaser.Tilemaps.TilemapLayer | null;
	public hydrantList!: FireHydrant[];
	public goal!: Goal;
	public newspaper!: Newspaper;

	/* START-USER-CODE */
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

	awake() {
		const {scene} = this

		//  passing the total width and height from the level scene to create the camera bounds
		scene.events.once("setup-cam-bounds", this.setupCameraBounds, this)
		scene.events.once("setup-world-bounds", this.setupWorldBounds, this)
	}

	// Write your code here.
	start() {
		const {scene} = this

		// setting up all the colliders here
		if(this.groundLayer)
		{
			scene.physics.add.collider(this.newspaper, this.groundLayer)
			scene.physics.add.collider(this.hydrantList, this.groundLayer)
			scene.physics.add.collider(this.player, this.groundLayer)
		}
		
		//@ts-ignore
		scene.physics.add.collider(this.player, this.newspaper, this.handlePlayerNewsPaper)
		//@ts-ignore
		scene.physics.add.collider(this.player, this.hydrantList, this.handlePlayerHydrant)
		scene.physics.add.collider(this.player, this.goal)

		// setting all the player inputs here and fire events to the player instead
		// this.cursors = scene.input.keyboard?.createCursorKeys()

		// play the tune in Level Behavior
		const theme = this.audioAddNode._g_audio

		scene.time.delayedCall(300, () => {
			theme?.play()
		})
	}

	// may need to re-visit this sometime
	// update() {
	// 	if(this.cursors) {
	// 		if(Phaser.Input.Keyboard.JustDown(this.cursors?.up)) {
	// 			this.player.emit("jump")
	// 		}
	// 		else if(this.cursors.down.isDown) {
	// 			this.player.emit("crouch")
	// 		}

	// 		if(this.cursors.left.isDown) {
	// 			this.player.emit("move-left")
	// 		}
	// 		else if(this.cursors.right.isDown) {
	// 			this.player.emit("move-right")
	// 		}
	// 	}
	// }

	setupCameraBounds(_boundW: number, _boundH: number) {
		this.cameraBounds.boundWidth = _boundW;
		this.cameraBounds.boundHeight = _boundH
	}

	setupWorldBounds(_boundW: number, _boundH: number) {
		this.worldBounds.width = _boundW;
		this.worldBounds.height = _boundH;
	}

	handlePlayerNewsPaper(player: Player, newspaper: Newspaper) {
		newspaper.disableBody(true, true)
		player.equip(1)
	}

	handlePlayerHydrant(player: Player, hydrant: FireHydrant) {
		player.pee()
		hydrant.disableBody()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
