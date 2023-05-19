
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "./Player";
import WASDCursors from "./scriptNodes/WASDCursors";
import CamFollow from "./scriptNodes/CamFollow";
import StateMachineNode from "./scriptNodes/StateMachineNode";
import IdleState from "./actorStates/IdleState";
import ArrowCursors from "./scriptNodes/ArrowCursors";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerContainer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// sprite
		const sprite = new Player(scene, 5, 0);
		this.add(sprite);

		// attack_box
		const attack_box = scene.add.rectangle(26, 12, 128, 128);
		attack_box.scaleX = 0.15787080101651232;
		attack_box.scaleY = 0.1863834170233853;
		attack_box.isFilled = true;
		attack_box.fillColor = 2802487;
		attack_box.fillAlpha = 0.5;
		this.add(attack_box);

		// matterBody
		const matterBody = scene.add.rectangle(1, 14, 16, 16);
		matterBody.scaleX = 1.5906812024234105;
		matterBody.scaleY = 1.309669464397548;
		matterBody.isFilled = true;
		matterBody.fillAlpha = 0.2;
		this.add(matterBody);

		// wASDCursors
		const wASDCursors = new WASDCursors(this);

		// camFollow_1
		new CamFollow(this);

		// stateMachineNode_1
		const stateMachineNode_1 = new StateMachineNode(this);

		// idleState
		const idleState = new IdleState(stateMachineNode_1);

		// arrowCursors
		const arrowCursors = new ArrowCursors(this);

		// stateMachineNode_1 (prefab fields)
		stateMachineNode_1.id = "player";
		stateMachineNode_1.contextProp = this;

		this.sprite = sprite;
		this.attack_box = attack_box;
		this.matterBody = matterBody;
		this.wASDCursors = wASDCursors;
		this.idleState = idleState;
		this.stateMachineNode_1 = stateMachineNode_1;
		this.arrowCursors = arrowCursors;

		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.scene.events.once("scene-awake", this.awake, this);

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	private sprite: Player;
	private attack_box: Phaser.GameObjects.Rectangle;
	private matterBody: Phaser.GameObjects.Rectangle;
	private wASDCursors: WASDCursors;
	private idleState: IdleState;
	private stateMachineNode_1: StateMachineNode;
	private arrowCursors: ArrowCursors;
	public runSpeed: number = 150;
	public jumpSpeed: number = 280;
	public dashMod: number = 5;
	public drag: number = 0.005;
	public dashLim: number = 5;

	/* START-USER-CODE */
	private physicsContainer?: Phaser.GameObjects.GameObject

	// Write your code here.
	awake() {
		this.defineBody()

		this.physicsContainer = this.scene.matter.add.gameObject(this)
	}

	//** Defines the size of the physics body first */
	private defineBody() {
		const { width, height } = this.matterBody

		this.setSize(width, height)
	}

	update(): void {
		const cursors = this.arrowCursors.getCursors
		const WASDKeys = this.wASDCursors.getCursors

		const isLeft = cursors?.left.isDown || WASDKeys?.left.isDown
		const isRight = cursors?.right.isDown || WASDKeys?.right.isDown
		const isJumpUp = (cursors && Phaser.Input.Keyboard.JustDown(cursors?.up)) || (WASDKeys && Phaser.Input.Keyboard.JustDown(WASDKeys?.up)) && this.sprite.body.onFloor()

		if(!this.body) { return }

		if(isLeft) {
			(this.body as Phaser.Physics.Arcade.Body).setVelocityX(-this.sprite.runSpeed)
		}
		else if (isRight) {
			(this.body as Phaser.Physics.Arcade.Body).setVelocityX(this.sprite.runSpeed)
		}
		else
		{
			(this.body as Phaser.Physics.Arcade.Body).setVelocityX(0)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
