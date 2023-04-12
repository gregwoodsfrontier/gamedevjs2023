
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StateMachineComp from "../components/StateMachineComp";
import StateMachineNode from "./scriptNodes/StateMachineNode";
import IdleState from "./scriptNodes/IdleState";
import RunState from "./scriptNodes/RunState";
import JumpState from "./scriptNodes/JumpState";
/* START-USER-IMPORTS */
import { ANIM_P_IDLE, ANIM_P_JUMP, ANIM_P_RUN } from "../animations";
/* END-USER-IMPORTS */

export default interface Player {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player-idle", frame ?? 0);

		scene.physics.add.existing(this, false);
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

		// this (components)
		const thisStateMachineComp = new StateMachineComp(this);
		thisStateMachineComp.id = "player";

		this.stateMachineNode = stateMachineNode;
		this.idleState = idleState;
		this.runState = runState;
		this.jumpState = jumpState;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.cursors = this.scene.input.keyboard.createCursorKeys()

		this.stateMachineNode.addState(
			this.idleState.stateName, {
				onEnter: () => {
					this.idleState.onEnter(this)
				}
			}
		).addState(
			this.runState.stateName, {
				onEnter: () => {
					this.runState.onEnter(this)
				},
				onUpdate: () => {
					this.runState.onUpdate(this, this.cursors?.left.isDown, this.cursors?.right.isDown, this.runSpeed)
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

		// this.stateMachine = thisStateMachineComp

		// thisStateMachineComp.addState('idle', {
		// 	onEnter: this.idleOnEnter,
		// 	onUpdate: this.idleOnUpdate
		// })
		// .addState('run', {
		// 	onEnter: this.runOnEnter,
		// 	onUpdate: this.runOnUpdate
		// })
		// .addState('jump', {
		// 	onEnter: this.jumpOnEnter,
		// 	onUpdate: this.jumpOnUpdate
		// })
		// .setState('idle')
		/* END-USER-CTR-CODE */
	}

	private stateMachineNode: StateMachineNode;
	private idleState: IdleState;
	private runState: RunState;
	private jumpState: JumpState;
	public runSpeed: number = 150;
	public jumpSpeed: number = 250;
	public hasJetPack: boolean = true;

	/* START-USER-CODE */
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
	// private stateMachine: StateMachineComp

	// Write your code here.
	// idleOnEnter() {
	// 	this.setVelocityX(0)
	// 	this.play(ANIM_P_IDLE)
	// }

	checkJumpCondition()
	{
		return this.cursors && Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.body.onFloor()
	}

	update(): void {
		if(this.stateMachineNode.isCurrentState(this.idleState.stateName)) {
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
	}

	// idleOnUpdate() {

	// 	// If left or right key is pressed, set the machine state to 'run'
	// 	if(this.cursors?.left.isDown || this.cursors?.right.isDown)
	// 	{
	// 		this.stateMachine.setState('run')
	// 	}

	// 	// Add a Jump Key (up arrow) for jump state
	// 	if (this.checkJumpCondition())
	// 	{
	// 		this.stateMachine.setState('jump')
	// 	}
	// }

	// runOnEnter() {
	// 	this.play(ANIM_P_RUN)
	// }

	// runOnUpdate() {
	// 	if(this.cursors?.left.isDown)
	// 	{
	// 		if(this.checkJumpCondition())
	// 		{
	// 			this.stateMachine.setState('jump')
	// 		}
	// 		this.flipX = true
	// 		this.setVelocityX(-this.runSpeed)
	// 	}
	// 	else if(this.cursors?.right.isDown)
	// 	{
	// 		if(this.checkJumpCondition())
	// 		{
	// 			this.stateMachine.setState('jump')
	// 		}
	// 		this.flipX = false
	// 		this.setVelocityX(this.runSpeed)
	// 	}
	// 	else
	// 	{
	// 		this.setVelocityX(0)
	// 		this.stateMachine.setState('idle')
	// 	}
	// }

	// runOnExit() {
	// 	this.stop()
	// }

	// jumpOnEnter() {
	// 	this.setVelocityY(-this.jumpSpeed)
	// 	this.play(ANIM_P_JUMP)
	// }

	// jumpOnUpdate() {

	// 	if(this.cursors?.left.isDown)
	// 	{
	// 		if(this.hasJetPack)
	// 		{
	// 			this.flipX = true
	// 			this.setVelocityX(-this.runSpeed)
	// 		}


	// 		if(this.body.onFloor())
	// 		{
	// 			this.stateMachine.setState('run')
	// 		}
	// 	}
	// 	else if(this.cursors?.right.isDown)
	// 	{
	// 		if(this.hasJetPack)
	// 		{
	// 			this.flipX = false
	// 			this.setVelocityX(this.runSpeed)
	// 		}

	// 		if(this.body.onFloor())
	// 		{
	// 			this.stateMachine.setState('run')
	// 		}
	// 	}
	// 	else
	// 	{
	// 		if(this.hasJetPack)
	// 		{
	// 			this.setVelocityX(0)
	// 		}

	// 		if(this.body.onFloor())
	// 		{
	// 			this.stateMachine.setState('idle')
	// 		}
	// 	}


	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
