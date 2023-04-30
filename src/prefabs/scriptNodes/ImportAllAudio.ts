
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ImportAllAudio extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	public SFXAudioList: Phaser.Sound.WebAudioSound[] = []
	public MusicAudioList: Phaser.Sound.WebAudioSound[] = []

	awake() {
		this.importAllAudio()
	}

	private importAllAudio() {
		const allAudioKeys = [
			"Dog_SFX_Crawl_1",
			"Dog_SFX_Crawl_2",
			"Dog_SFX_Crawl_3",
			"Dog_SFX_Crawl_4",
			"Dog_SFX_Crawl_5",
			"Dog_SFX_Crawl_6",
			"Dog_SFX_Crawl_7",
			"Dog_SFX_Step_1",
			"Dog_SFX_Step_2",
			"Dog_SFX_Step_3",
			"Dog_SFX_Step_4",
			"Dog_SFX_Step_5",
			"Dog_SFX_Step_6",
			"Dog_SFX_Step_7",
			"Dog_SFX_Dash",
			"Dog_SFX_Jumping_landing",
			"Dog_SFX_Jumping",
			"End_Of_Level_Music",
			"End_Of_Level_Music_1",
			"Game_Over_Music",
			"Menu_SFX_Back",
			"Menu_SFX_Click",
			"Menu_SFX_Fullscreen",
			"Menu_SFX_Play",
			"Menu_SFX_Volume_Sliders",
			"Newspaper_SFX",
			"Success_Music",
			"Time_Running_Out_Music"
		]

		for(let key of allAudioKeys) {

			const audioObject = (this.scene.sound.add(key) as Phaser.Sound.WebAudioSound)

			if(key.includes("SFX")) {
				console.log(audioObject.key)
				this.SFXAudioList.push(audioObject)
			}
			else {
				this.MusicAudioList.push(audioObject)
			}
			
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
