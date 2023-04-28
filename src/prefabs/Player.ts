
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StateMachineNode from "./scriptNodes/StateMachineNode";
import IdleState from "./actorStates/IdleState";
import RunState from "./actorStates/RunState";
import JumpState from "./actorStates/JumpState";
import StaggerState from "./actorStates/StaggerState";
import DashState from "./actorStates/DashState";
import CrouchState from "./actorStates/CrouchState";
import PeeState from "./actorStates/PeeState";
import CamFollow from "./scriptNodes/CamFollow";
/* START-USER-IMPORTS */
import { ANIM_SHIBA_IDLE, ANIM_SHIBA_JUMP, ANIM_SHIBA_WALK } from "../consts/shiba-anims";
/* END-USER-IMPORTS */

export default interface Player {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "shiba_idle", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.useDamping = true;
		this.body.collideWorldBounds = true;
		this.body.setOffset(13, 28);
		this.body.setSize(22, 20, false);

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

		// crouchState
		const crouchState = new CrouchState(stateMachineNode);

		// peeState
		const peeState = new PeeState(stateMachineNode);

		// camFollow
		new CamFollow(this);

		this.idleState = idleState;
		this.runState = runState;
		this.jumpState = jumpState;
		this.staggerState = staggerState;
		this.dashState = dashState;
		this.crouchState = crouchState;
		this.peeState = peeState;
		this.stateMachineNode = stateMachineNode;

		/* START-USER-CTR-CODE */
		// Write your code here.
		if(scene) {
			if(scene.input.keyboard) {
				this.cursors = scene.input.keyboard.createCursorKeys()
			}
		}

		this.stateMachineNode.addState(
			this.idleState.name, {
				onEnter: () => {
					this.idleState.onEnter(this, ANIM_SHIBA_IDLE)
				}
			}
		).addState(
			this.dashState.name, {
				onEnter: () => {
					this.dashState.onEnter(this, ANIM_SHIBA_WALK, this.runSpeed)
				},
				// onUpdate: () => {
				// 	this.dashState.onUpdate()
				// },
				onExit: () => {
					this.dashState.onExit(this)
				}
			}
		).addState(
			this.runState.name, {
				onEnter: () => {
					this.runState.onEnter(this, ANIM_SHIBA_WALK)
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
			this.crouchState.name, {
				onEnter: () => {
					this.crouchState.onEnter(this)
				},
				onUpdate: () => {
					this.crouchState.onUpdate({
						sprite: this, 
						isLeft: this.cursors?.left.isDown, 
						isRight: this.cursors?.right.isDown, 
						speed: this.runSpeed
					}
					)
				},
				onExit: () => {
					this.crouchState.onExit(this)
				}
			}
		).addState(
			this.jumpState.name, {
				onEnter: () => {
					this.jumpState.onEnter(this, this.jumpSpeed, ANIM_SHIBA_JUMP)
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
		).addState(
			this.staggerState.name, {
				onEnter: () => {
					this.staggerState.onEnter(this)
				},
				onExit: () => {
					this.staggerState.onExit(this)
				}
			}
		).setState(this.idleState.name)

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	private idleState: IdleState;
	private runState: RunState;
	private jumpState: JumpState;
	private staggerState: StaggerState;
	private dashState: DashState;
	private crouchState: CrouchState;
	private peeState: PeeState;
	private stateMachineNode: StateMachineNode;
	public runSpeed: number = 150;
	public jumpSpeed: number = 280;
	public hasJetPack: boolean = true;
	public dashSpd: number = 10;
	public dashTime: number = 1000;

	/* START-USER-CODE */
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
	private inventory = [] as number[]

	// Write your code here.

	checkJumpCondition()
	{
		return this.cursors && Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.body.onFloor()
	}

	checkShiftKeyJustPress() {
		if(!this.cursors?.shift) { return }

		return Phaser.Input.Keyboard.JustDown(this.cursors?.shift)
	}

	checkKeyJustPress(key?: Phaser.Input.Keyboard.Key) {
		if(!key) { return }

		return Phaser.Input.Keyboard.JustDown(key)
	}

	get inventoryGetter() {
		return this.inventory
	}

	equip(item: number) {
		console.log('Dog has newspaper equipped')
		this.inventory.push(item)
		console.log('Dog item bag : ', this.inventory)
	}

	unequip(item: number) {
		console.log('Dog has newspaper un-equipped')
		const filtered = this.inventory.filter(i => i === item)
		this.inventory = filtered
		console.log('Dog item bag : ', this.inventory)
	}

	pee() {
		this.stateMachineNode.setState(this.peeState.name)
	}

	switchStateMachineNetwork() {
		if(!this.body) {
			// console.error(`player body is undefined`)
			return 
		}
		switch (this.stateMachineNode.currentStateName) {
			case this.idleState.name:
				if(this.checkShiftKeyJustPress()) {
					this.stateMachineNode.setState(this.dashState.name)
				}

				if(this.cursors?.left.isDown || this.cursors?.right.isDown) {

					this.stateMachineNode.setState(this.runState.name)
				}

				if(this.cursors?.down.isDown) {
					this.stateMachineNode.setState(this.crouchState.name)

				}

				if(this.checkJumpCondition()) {
					this.stateMachineNode.setState(this.jumpState.name)
				}
				break;
			case this.runState.name:
				if(this.checkJumpCondition())
				{
					this.stateMachineNode.setState(this.jumpState.name)
				}
				else if(this.cursors?.left.isUp && this.cursors?.right.isUp) {
					this.stateMachineNode.setState(this.idleState.name)
				}
				break;
			case this.jumpState.name:
				if(this.body.onFloor()) {
					if(this.cursors?.left.isDown || this.cursors?.right.isDown) {
						this.stateMachineNode.setState(this.runState.name)
					}
					else if(this.cursors?.left.isUp && this.cursors?.right.isUp) {
						this.stateMachineNode.setState(this.idleState.name)
					}
				}
				break;
			case this.dashState.name:
				if(Math.abs(this.body.velocity.x) < 5) {
					this.stateMachineNode.setState(this.idleState.name)
				}
				break;
			case this.crouchState.name:
				if(this.cursors?.down.isUp)
				{
					this.stateMachineNode.setState(this.idleState.name)
				}
				break;
		}
	}

	// let the update handle all the state transition logic
	update(): void {
		this.switchStateMachineNetwork()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
