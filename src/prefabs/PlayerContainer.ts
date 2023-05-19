
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StateMachineNode from "./scriptNodes/StateMachineNode";
import IdleState from "./actorStates/IdleState";
import RunState from "./actorStates/RunState";
import ArrowCursors from "./scriptNodes/ArrowCursors";
import WASDCursors from "./scriptNodes/WASDCursors";
import CamFollow from "./scriptNodes/CamFollow";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerContainer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// sprite_1
		const sprite_1 = scene.add.sprite(5, 0, "shiba_idle", 0);
		this.add(sprite_1);

		// top_sensor
		const top_sensor = scene.add.rectangle(1, 0, 16, 8);
		top_sensor.scaleX = 1.47;
		top_sensor.scaleY = 0.31;
		top_sensor.isFilled = true;
		top_sensor.fillColor = 15063857;
		top_sensor.fillAlpha = 0.5;
		this.add(top_sensor);

		// left_sensor
		const left_sensor = scene.add.rectangle(-15, 14, 16, 8);
		left_sensor.scaleX = 0.2;
		left_sensor.scaleY = 2.6;
		left_sensor.isFilled = true;
		left_sensor.fillColor = 15063857;
		left_sensor.fillAlpha = 0.5;
		this.add(left_sensor);

		// right_sensor
		const right_sensor = scene.add.rectangle(17, 14, 16, 8);
		right_sensor.scaleX = 0.2;
		right_sensor.scaleY = 2.6;
		right_sensor.isFilled = true;
		right_sensor.fillColor = 15063857;
		right_sensor.fillAlpha = 0.5;
		this.add(right_sensor);

		// attack_box
		const attack_box = scene.add.rectangle(24, 13, 128, 128);
		attack_box.scaleX = 0.10596916561747083;
		attack_box.scaleY = 0.1863834170233853;
		attack_box.isFilled = true;
		attack_box.fillColor = 2802487;
		attack_box.fillAlpha = 0.5;
		this.add(attack_box);

		// matterBody
		const matterBody = scene.add.rectangle(1, 13, 16, 16);
		matterBody.scaleX = 1.5906812024234105;
		matterBody.scaleY = 1.3928274317334661;
		matterBody.isFilled = true;
		matterBody.fillAlpha = 0.2;
		this.add(matterBody);

		// ground_sensor
		const ground_sensor = scene.add.rectangle(1, 26, 16, 8);
		ground_sensor.scaleX = 1.47;
		ground_sensor.scaleY = 0.31;
		ground_sensor.isFilled = true;
		ground_sensor.fillColor = 15063857;
		ground_sensor.fillAlpha = 0.5;
		this.add(ground_sensor);

		// stateMachineNode_1
		const stateMachineNode_1 = new StateMachineNode(this);

		// idleState
		const idleState = new IdleState(stateMachineNode_1);

		// runState
		const runState = new RunState(stateMachineNode_1);

		// arrowCursors
		const arrowCursors = new ArrowCursors(this);

		// wASDCursors
		const wASDCursors = new WASDCursors(this);

		// camFollow_1
		new CamFollow(this);

		// stateMachineNode_1 (prefab fields)
		stateMachineNode_1.id = "player";
		stateMachineNode_1.contextProp = this;

		this.sprite_1 = sprite_1;
		this.left_sensor = left_sensor;
		this.attack_box = attack_box;
		this.matterBody = matterBody;
		this.ground_sensor = ground_sensor;
		this.idleState = idleState;
		this.runState = runState;
		this.stateMachineNode_1 = stateMachineNode_1;
		this.arrowCursors = arrowCursors;
		this.wASDCursors = wASDCursors;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once("scene-awake", this.awake, this);

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	public sprite_1: Phaser.GameObjects.Sprite;
	private left_sensor: Phaser.GameObjects.Rectangle;
	private attack_box: Phaser.GameObjects.Rectangle;
	private matterBody: Phaser.GameObjects.Rectangle;
	private ground_sensor: Phaser.GameObjects.Rectangle;
	private idleState: IdleState;
	private runState: RunState;
	private stateMachineNode_1: StateMachineNode;
	private arrowCursors: ArrowCursors;
	private wASDCursors: WASDCursors;
	public runSpeed: number = 150;
	public jumpSpeed: number = 280;
	public dashMod: number = 5;
	public drag: number = 0.005;
	public dashLim: number = 5;

	/* START-USER-CODE */
	// private physicsContainer?: Phaser.Types.Physics.Matter.MatterBody
	// private physicsContainer?: any

	public matterSprite!: Phaser.Physics.Matter.Sprite

	// Write your code here.
	awake() {
		this.defineBody()

		const Bodies = MatterJS.Bodies

		const mainBody = Bodies.rectangle(this.matterBody.x, this.matterBody.y, this.matterBody.width, this.matterBody.height, {
			chamfer: {
				radius: 4
			}
		})
	}

	//** Defines the size of the physics body first */
	private defineBody() {
		this.matterSprite = this.scene.matter.add.sprite(
			this.sprite_1.x,
			this.sprite_1.y,
			this.sprite_1.texture.key,
			0
		)

		this.sprite_1.setActive(false).setVisible(false)
	}

	update(): void {
		const cursors = this.arrowCursors.getCursors
		const WASDKeys = this.wASDCursors.getCursors

		const isLeft = cursors?.left.isDown || WASDKeys?.left.isDown
		const isRight = cursors?.right.isDown || WASDKeys?.right.isDown
		const isJumpUp = (cursors && Phaser.Input.Keyboard.JustDown(cursors?.up)) || (WASDKeys && Phaser.Input.Keyboard.JustDown(WASDKeys?.up)) && this.sprite.body.onFloor()

		// if(!this.body) { return }

		// if(isLeft) {
		// 	(this.body as Phaser.Physics.Arcade.Body).setVelocityX(-this.sprite.runSpeed)
		// }
		// else if (isRight) {
		// 	(this.body as Phaser.Physics.Arcade.Body).setVelocityX(this.sprite.runSpeed)
		// }
		// else
		// {
		// 	(this.body as Phaser.Physics.Arcade.Body).setVelocityX(0)
		// }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
