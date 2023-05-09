
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import OnAudioEvent from "./OnAudioEvent";
import OnMultipleAudioEvent from "./OnMultipleAudioEvent";
/* END-USER-IMPORTS */

export default class AudioEndNode extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public audioKey: string = "";

	/* START-USER-CODE */

	// Write your code here.
	execute(): void {
		if((this.parent as OnAudioEvent).audioKey)
		{
			const audio = (this.parent as OnAudioEvent).audioKey
			const sound = (this.scene.sound.get(audio)) as Phaser.Sound.WebAudioSound
			if(sound.isPlaying)
			{
				sound.stop()
			}
		}
		else if ((this.parent as OnMultipleAudioEvent).audioKeyPrefix)
		{
			// const audioKeyPrefix = (this.parent as OnMultipleAudioEvent).audioKeyPrefix

			// push every audio sound that is "get" by the sound manager
			//@ts-ignore
			const soundList = (this.scene.sound.getAllPlaying()) as Phaser.Sound.WebAudioSound[]

			soundList.forEach(sd => sd.stop())
		}
		else {
			return
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
