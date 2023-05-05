
// You can write more code here

/* START OF COMPILED CODE */


import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import OnAudioEvent from "./OnAudioEvent";
import OnMultipleAudioEvent from "./OnMultipleAudioEvent";
/* END-USER-IMPORTS */

export default class AudioPlayNode extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	execute(): void {
		
		if((this.parent as OnAudioEvent).audioKey)
		{
			const audio = (this.parent as OnAudioEvent).audioKey
			const sound = (this.scene.sound.get(audio)) as Phaser.Sound.WebAudioSound
			if(!sound.isPlaying)
			{
				sound.play()
			}
		}
		else if ((this.parent as OnMultipleAudioEvent).audioKeyPrefix)
		{
			const audioKeyPrefix = (this.parent as OnMultipleAudioEvent).audioKeyPrefix

			// push every audio sound that is "get" by the sound manager
			//@ts-ignore
			const soundList = (this.scene.sound.getAll()) as Phaser.Sound.WebAudioSound[]

			const filterSoundList = soundList.filter(sd => sd.key.includes(audioKeyPrefix))

			if(filterSoundList.length < 1) { return }

			const ran = Phaser.Math.Between(0, filterSoundList.length - 1)

			if(!filterSoundList[ran].isPlaying)
			{
				filterSoundList[ran].play()
			}
		}
		else {
			return
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
