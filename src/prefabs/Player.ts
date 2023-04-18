
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CameraFollow from "../components/CameraFollow";
import StateMachineNode from "./scriptNodes/StateMachineNode";
import IdleState from "./actorStates/IdleState";
import RunState from "./actorStates/RunState";
import JumpState from "./actorStates/JumpState";
import StaggerState from "./actorStates/StaggerState";
import DashState from "./actorStates/DashState";
/* START-USER-IMPORTS */
import { ANIM_P_IDLE, ANIM_P_RUN } from "../animations";
/* END-USER-IMPORTS */

export default interface Player {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player-idle", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.useDamping = true;
		this.body.collideWorldBounds = true;
		this.body.setOffset(6, 10);
		this.body.setSize(21, 22, false);

		// stateMachineNode
		const stateMachineNode = new StateMachineNode(this);

		// idleState
		const idleState = new IdleState(stateMachineNode);

		// runState
		const runState = new RunState(stateMachineNode);

		// jumpState
		const jumpState = new JumpState(stateMachineNode);

		// staggerState
		const staggerState = new StaggerState(stateMachineNode);

		// dashState
		const dashState = new DashState(stateMachineNode);

		// this (components)
		new CameraFollow(this);

		this.idleState = idleState;
		this.runState = runState;
		this.jumpState = jumpState;
		this.staggerState = staggerState;
		this.dashState = dashState;
		this.stateMachineNode = stateMachineNode;

		/* START-USER-CTR-CODE */
		// Write your code here.
		if(scene) {
			if(scene.input.keyboard) {
				this.cursors = scene.input.keyboard.createCursorKeys()
			}

			scene.physics.world.setBounds(0, 0, 75*16, 23*16)
		}

		this.stateMachineNode.addState(
			this.idleState.stateName, {
				onEnter: () => {
					this.idleState.onEnter(this, ANIM_P_IDLE)
				}
			}
		).addState(
			this.dashState.stateName, {
				onEnter: () => {
					this.dashState.onEnter(this, ANIM_P_RUN, {
						sprite: this, 
						isLeft: this.flipX, 
						isRight: !this.flipX, 
						speed: this.runSpeed
					})
				},
				// onUpdate: () => {
				// 	this.dashState.onUpdate()
				// },
				onExit: () => {
					this.dashState.onExit(this)
				}
			}
		).addState(
			this.runState.stateName, {
				onEnter: () => {
					this.runState.onEnter(this)
				},
				onUpdate: () => {
					this.runState.onUpdate({
						sprite: this, 
						isLeft: this.cursors?.left.isDown, 
						isRight: this.cursors?.right.isDown, 
						speed: this.runSpeed
					})
				},
				onExit: () => {
					this.runState.onExit(this)
				}
			}
		).addState(
			this.jumpState.stateName, {
				onEnter: () => {
					this.jumpState.onEnter(this, this.jumpSpeed)
				},
				onUpdate: () => {
					this.jumpState.onUpdate(
						this, 
						this.cursors?.left.isDown, 
						this.cursors?.right.isDown, 
						this.hasJetPack,
						this.runSpeed
					)
				}
			}
		).setState(this.idleState.stateName)

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	private idleState: IdleState;
	private runState: RunState;
	private jumpState: JumpState;
	private staggerState: StaggerState;
	private dashState: DashState;
	private stateMachineNode: StateMachineNode;
	public runSpeed: number = 150;
	public jumpSpeed: number = 250;
	public hasJetPack: boolean = true;
	public dashSpd: number = 10;
	public dashTime: number = 1000;

	/* START-USER-CODE */
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

	// Write your code here.

	checkJumpCondition()
	{
		return this.cursors && Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.body.onFloor()
	}

	checkShiftKeyJustPress() {
		if(!this.cursors?.shift) { return }

		return Phaser.Input.Keyboard.JustDown(this.cursors?.shift)
	}

	handleStateMachineNetwork() {
		if(this.stateMachineNode.isCurrentState(this.idleState.stateName)) {
			if(this.checkShiftKeyJustPress()) {
				this.stateMachineNode.setState(this.dashState.stateName)
			}

			if(this.cursors?.left.isDown || this.cursors?.right.isDown) {

				this.stateMachineNode.setState(this.runState.stateName)
			}

			if(this.checkJumpCondition()) {
				this.stateMachineNode.setState(this.jumpState.stateName)
			}
		}
		else if(this.stateMachineNode.isCurrentState(this.runState.stateName)) {
			if(this.checkJumpCondition())
			{
				this.stateMachineNode.setState(this.jumpState.stateName)
			}
			else if(this.cursors?.left.isUp && this.cursors?.right.isUp) {
				this.stateMachineNode.setState(this.idleState.stateName)
			}
		}
		else if(this.stateMachineNode.isCurrentState(this.jumpState.stateName)) {
			if(this.body.onFloor()) {
				if(this.cursors?.left.isDown || this.cursors?.right.isDown) {
					this.stateMachineNode.setState(this.runState.stateName)
				}
				else if(this.cursors?.left.isUp && this.cursors?.right.isUp) {
					this.stateMachineNode.setState(this.idleState.stateName)
				}
			}
		}
		else if(this.stateMachineNode.isCurrentState(this.dashState.stateName)) {
			if(this.body.velocity.x < 5) {
				this.stateMachineNode.setState(this.idleState.stateName)
			}
		}

	}

	// let the update handle all the state transition logic
	update(): void {
		this.handleStateMachineNetwork()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
