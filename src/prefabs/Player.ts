
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { ANIM_SHIBA_IDLE, ANIM_SHIBA_JUMP, ANIM_SHIBA_WALK } from "../consts/shiba-anims";
import eventsCenter from "../eventCenter";
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "shiba_idle", frame ?? 0);

		/* START-USER-CTR-CODE */
		// Write your code here.
		if (scene) {
			if (scene.input.keyboard) {
				this.cursors = scene.input.keyboard.createCursorKeys()
				this.wasdKeys = {
					up: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
					down: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
					left: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
					right: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
					space: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
					shift: this.cursors.shift
				}
			}
		}

		this.stateMachineNode.addState(
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
		)
		.addState(
			this.crouchState.name, {
			onEnter: () => {
				this.crouchState.onEnter(this)
			},
			onUpdate: () => {
				this.crouchState.onUpdate({
					sprite: this,
					isLeft: this.cursors?.left.isDown || this.wasdKeys?.left.isDown,
					isRight: this.cursors?.right.isDown || this.wasdKeys?.right.isDown,
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
					this.cursors?.left.isDown || this.wasdKeys?.left.isDown,
					this.cursors?.right.isDown || this.wasdKeys?.right.isDown,
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

	public runSpeed: number = 150;
	public jumpSpeed: number = 280;
	public hasJetPack: boolean = true;

	/* START-USER-CODE */
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
	private wasdKeys?: Phaser.Types.Input.Keyboard.CursorKeys;
	private inventory = [] as number[]

	// Write your code here.

	get _getCursors() {
		return this.cursors
	}

	get _getWASD() {
		return this.wasdKeys
	}

	checkJumpCondition() {
		return (this.cursors && Phaser.Input.Keyboard.JustDown(this.cursors.up) || this.wasdKeys && Phaser.Input.Keyboard.JustDown(this.wasdKeys.up)) && this.body.onFloor()
	}

	checkShiftKeyJustPress() {
		if (!this.cursors?.shift) { return }

		return Phaser.Input.Keyboard.JustDown(this.cursors?.shift)
	}

	checkKeyJustPress(key?: Phaser.Input.Keyboard.Key) {
		if (!key) { return }

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
		if (!this.body) {
			// console.error(`player body is undefined`)
			return
		}
		switch (this.stateMachineNode.currentStateName) {
			case this.idleState.name:
				if (this.checkShiftKeyJustPress()) {
					this.stateMachineNode.setState(this.dashState.name)
				}

				if (this.cursors?.left.isDown || this.cursors?.right.isDown || this.wasdKeys?.left.isDown || this.wasdKeys?.right.isDown) {
					this.stateMachineNode.setState(this.runState.name)
				}

				if (this.cursors?.down.isDown || this.wasdKeys?.down.isDown) {
					this.stateMachineNode.setState(this.crouchState.name)

				}

				if (this.checkJumpCondition()) {
					this.stateMachineNode.setState(this.jumpState.name)
				}
				break;
			case this.runState.name:
				if (this.checkJumpCondition() || this.wasdKeys?.up.isDown && this.body.onFloor()) {
					this.stateMachineNode.setState(this.jumpState.name);
				} else if (this.cursors?.down.isDown || this.wasdKeys?.down.isDown) {
					this.stateMachineNode.setState(this.crouchState.name);
				} else if (this.cursors?.left.isUp && this.cursors?.right.isUp && this.wasdKeys?.left.isUp && this.wasdKeys?.right.isUp) {
					this.stateMachineNode.setState(this.idleState.name);
				}
				break;
			case this.jumpState.name:
				if (this.body.onFloor()) {
					if (this.cursors?.left.isDown || this.cursors?.right.isDown || this.wasdKeys?.left.isUp || this.wasdKeys?.right.isUp) {
						this.stateMachineNode.setState(this.runState.name)
					}
					else if (this.cursors?.left.isUp && this.cursors?.right.isUp || this.wasdKeys?.left.isUp && this.wasdKeys?.right.isUp) {
						eventsCenter.emit("sfx-jumpland")
						this.stateMachineNode.setState(this.idleState.name)
					}
				}
				break;
			case this.dashState.name:
				if (Math.abs(this.body.velocity.x) < 5) {
					this.stateMachineNode.setState(this.idleState.name)
				}
				break;
			case this.crouchState.name:
				if (this.cursors?.down.isUp && this.wasdKeys?.down.isUp) {
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
