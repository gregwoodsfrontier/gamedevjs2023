
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InputManager extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
	private wasdKeys?: Phaser.Types.Input.Keyboard.CursorKeys;

	awake() {
		if (this.scene) {
			const {scene} = this
			if(scene.input.keyboard) {
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
	}

	get _g_cursors() {
		return this.cursors
	}

	get _g_wasdKeys() {
		return this.wasdKeys
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
