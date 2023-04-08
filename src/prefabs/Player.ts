
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StateMachineComp from "../components/StateMachineComp";
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
		this.body.setOffset(0, 7);
		this.body.setSize(16, 24, false);

		// this (components)
		const thisStateMachineComp = new StateMachineComp(this);
		thisStateMachineComp.id = "player";

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.cursors = this.scene.input.keyboard.createCursorKeys()
		this.stateMachine = thisStateMachineComp

		thisStateMachineComp.addState('idle', {
			onEnter: this.idleOnEnter,
			onUpdate: this.idleOnUpdate
		})
		.addState('run', {
			onEnter: this.runOnEnter,
			onUpdate: this.runOnUpdate
		})
		.addState('jump', {
			onEnter: this.jumpOnEnter,
			onUpdate: this.jumpOnUpdate
		})
		.setState('idle')
		/* END-USER-CTR-CODE */
	}

	public runSpeed: number = 200;
	public jumpSpeed: number = 250;

	/* START-USER-CODE */
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
	private stateMachine: StateMachineComp

	// Write your code here.
	idleOnEnter() {
		this.play(ANIM_P_IDLE)
	}

	checkJumpCondition()
	{
		return this.cursors && Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.body.onFloor()
	}

	idleOnUpdate() {

		// If left or right key is pressed, set the machine state to 'run'
		if(this.cursors?.left.isDown || this.cursors?.right.isDown)
		{
			this.stateMachine.setState('run')
		}

		// Add a Jump Key (up arrow) for jump state
		if (this.checkJumpCondition())
		{
			this.stateMachine.setState('jump')
		}
	}

	runOnEnter() {
		this.play(ANIM_P_RUN)
	}

	runOnUpdate() {
		if(this.cursors?.left.isDown)
		{
			if(this.checkJumpCondition())
			{
				this.stateMachine.setState('jump')
			}
			this.flipX = true
			this.setVelocityX(-this.runSpeed)
		}
		else if(this.cursors?.right.isDown)
		{
			if(this.checkJumpCondition())
			{
				this.stateMachine.setState('jump')
			}
			this.flipX = false
			this.setVelocityX(this.runSpeed)
		}
		else
		{
			this.setVelocityX(0)
			this.stateMachine.setState('idle')
		}
	}

	runOnExit() {
		this.stop()
	}

	jumpOnEnter() {
		this.setVelocityY(-this.jumpSpeed)
		this.play(ANIM_P_JUMP)
	}

	jumpOnUpdate() {

		if(this.cursors?.left.isDown)
		{
			this.flipX = true
			this.setVelocityX(-this.runSpeed)
			if(this.body.onFloor())
			{
				this.stateMachine.setState('run')
			}
		}
		else if(this.cursors?.right.isDown)
		{
			this.flipX = false
			this.setVelocityX(this.runSpeed)
			if(this.body.onFloor())
			{
				this.stateMachine.setState('run')
			}
		}
		else
		{
			this.setVelocityX(0)
			if(this.body.onFloor())
			{
				this.stateMachine.setState('idle')
			}
		}


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
