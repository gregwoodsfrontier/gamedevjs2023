
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
import ChangeStateInController from "./ChangeStateInController";
/* START-USER-IMPORTS */
import Player from "../Player";
import FireHydrant from "../FireHydrant";
import Newspaper from "../Newspaper";
import Goal from "../Goal";
import eventsCenter from "../../eventCenter";
import PlayerContainer from "../PlayerContainer";
import Level1 from "../../scenes/Level1";
/* END-USER-IMPORTS */

export default class LevelBehavior extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// toCompleteLv
		const toCompleteLv = new ChangeStateInController(this);

		// toCompleteLv (prefab fields)
		toCompleteLv.SMState = "complete";

		this.toCompleteLv = toCompleteLv;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private toCompleteLv: ChangeStateInController;
	public player!: Player;
	public groundLayer!: Phaser.Tilemaps.TilemapLayer | null;
	public hydrantList!: FireHydrant[];
	public goal!: Goal[];
	public newspaper!: Newspaper[];
	public pDetectBox!: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */

	awake() {
		const {scene, groundLayer} = this

		if(groundLayer) {
			scene.matter.world.convertTilemapLayer(groundLayer)
		}
		
		this.player.setDepth(2)

		eventsCenter.once("to-gameover", () => {
			scene.scene.transition({
				target: "Gameover",
				moveAbove: true,
				duration: 10
			})
			scene.scene.stop()
		}, this)
	}

	// Write your code here.
	start() {
		const {scene} = this

		const levelKey = this.scene.registry.get("level-key")

		const levelScene = (this.scene.scene.get(levelKey) as Level1)

		// setting up all the colliders here
		if(this.groundLayer)
		{
			// using the player container as checking
			if(levelScene.playerContainer) {
				scene.physics.add.collider(levelScene.playerContainer as PlayerContainer, this.groundLayer)
			}

			if(levelScene.tunnelList) {
				scene.physics.add.overlap(this.player, levelScene.tunnelList, (player, tunnel) => {
					console.info('player overlaps with tunnel list')
				})
			}

			scene.physics.add.collider(this.newspaper, this.groundLayer)
			scene.physics.add.collider(this.hydrantList, this.groundLayer)
			scene.physics.add.collider(this.player, this.groundLayer)
			scene.physics.add.collider(this.goal, this.groundLayer)

			if(this.pDetectBox) {
				scene.physics.add.overlap(this.pDetectBox, this.groundLayer, () => {
					console.warn('detection box overlap with ground layer')
				})
			}
			
			// debug info
			// this.groundLayer.renderDebug(scene.add.graphics().setAlpha(0.75), {
			// 	tileColor: null, // Color of non-colliding tiles
			// 	collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
			// 	faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
			// })
		}

		//@ts-ignore
		scene.physics.add.collider(this.player, this.newspaper, this.handlePlayerNewsPaper)

		scene.physics.add.collider(this.player, this.hydrantList, this.handlePlayerHydrant)
		//@ts-ignore
		scene.physics.add.overlap(this.player, this.goal, this.handlePlayerGoal, undefined, this)
	}

	private handlePlayerNewsPaper(player: Player, newspaper: Newspaper) {
		eventsCenter.emit("sfx-newspaper")
		newspaper.disableBody(true, true)
		player.equip(1)
	}

	private handlePlayerHydrant(player: Phaser.Types.Physics.Arcade.GameObjectWithBody | Phaser.Tilemaps.Tile, hydrant: Phaser.Types.Physics.Arcade.GameObjectWithBody | Phaser.Tilemaps.Tile) {
		(player as Player).pee();
		(hydrant as FireHydrant).disableBody();
	}

	//@ts-ignore
	private handlePlayerGoal(p: Player, goal: Goal) {
		// check if the dog has a newspaper
		if(p.inventoryGetter.find(e => e === 1)) {
			// make the dog celebrate

			// go to complete level
			if(this.toCompleteLv) {
				this.toCompleteLv.execute()
			}

		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
