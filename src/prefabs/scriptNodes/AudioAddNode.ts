
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AudioAddNode extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public audioKey: string = "";
	public _loop: boolean = true;
	public type: "music"|"sfx" = "music";

	/* START-USER-CODE */
	private audio?: Phaser.Sound.WebAudioSound
	// Write your code here.
	awake() {
		this.audio = (this.scene.sound.add(this.audioKey, {
			loop: this._loop
		}) as Phaser.Sound.WebAudioSound)

		// this.audio.manager.volume = 0.5
	}

	get _getAudio() {
		return this.audio
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
