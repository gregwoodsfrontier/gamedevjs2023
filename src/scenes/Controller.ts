
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FullScreenButton from "../prefabs/FullScreenButton";
import StateMachineNode from "../prefabs/scriptNodes/StateMachineNode";
import ImportAllAudio from "../prefabs/scriptNodes/ImportAllAudio";
import OnAudioEvent from "../prefabs/scriptNodes/OnAudioEvent";
import AudioPlayNode from "../prefabs/scriptNodes/AudioPlayNode";
import OnMultipleAudioEvent from "../prefabs/scriptNodes/OnMultipleAudioEvent";
import AudioEndNode from "../prefabs/scriptNodes/AudioEndNode";
/* START-USER-IMPORTS */
import eventsCenter from "../eventCenter";
import { PAUSE_GAME, RESUME_GAME } from "../prefabs/scriptNodes/onPauseScreenNode";
/* END-USER-IMPORTS */

export default class Controller extends Phaser.Scene {

	constructor() {
		super("Controller");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fullScreenButton
		const fullScreenButton = new FullScreenButton(this, 602, 321);
		this.add.existing(fullScreenButton);
		fullScreenButton.scaleX = 0.5;
		fullScreenButton.scaleY = 0.5;

		// stateMachineNode
		const stateMachineNode = new StateMachineNode(this);

		// importAllAudio
		const importAllAudio = new ImportAllAudio(this);

		// onAudioFullScreen
		const onAudioFullScreen = new OnAudioEvent(this);

		// playFullscreenSFX
		new AudioPlayNode(onAudioFullScreen);

		// onAudioClick
		const onAudioClick = new OnAudioEvent(this);

		// audioPlayNode_2
		new AudioPlayNode(onAudioClick);

		// onAudioBack
		const onAudioBack = new OnAudioEvent(this);

		// audioPlayNode_1
		new AudioPlayNode(onAudioBack);

		// onAudioPlay
		const onAudioPlay = new OnAudioEvent(this);

		// audioPlayNode
		new AudioPlayNode(onAudioPlay);

		// onAudioVolume
		const onAudioVolume = new OnAudioEvent(this);

		// audioPlayNode_3
		new AudioPlayNode(onAudioVolume);

		// onMultipleAudioStep
		const onMultipleAudioStep = new OnMultipleAudioEvent(this);

		// audioPlayNode_4
		new AudioPlayNode(onMultipleAudioStep);

		// onMultipleAudioCrawl
		const onMultipleAudioCrawl = new OnMultipleAudioEvent(this);

		// audioPlayNode_5
		new AudioPlayNode(onMultipleAudioCrawl);

		// onAudioNewspaper
		const onAudioNewspaper = new OnAudioEvent(this);

		// audioPlayNode_6
		new AudioPlayNode(onAudioNewspaper);

		// onAudioDash
		const onAudioDash = new OnAudioEvent(this);

		// audioPlayNode_7
		new AudioPlayNode(onAudioDash);

		// onAudioJump
		const onAudioJump = new OnAudioEvent(this);

		// audioPlayNode_8
		new AudioPlayNode(onAudioJump);

		// onAudioJumpLand
		const onAudioJumpLand = new OnAudioEvent(this);

		// audioPlayNode_9
		new AudioPlayNode(onAudioJumpLand);

		// onMultipleAudioEndLv
		const onMultipleAudioEndLv = new OnMultipleAudioEvent(this);

		// audioPlayNode_11
		new AudioPlayNode(onMultipleAudioEndLv);

		// onAudioGameover
		const onAudioGameover = new OnAudioEvent(this);

		// audioPlayNode_10
		new AudioPlayNode(onAudioGameover);

		// onGameOverEnd
		const onGameOverEnd = new OnAudioEvent(this);

		// audioEndNode_1
		new AudioEndNode(onGameOverEnd);

		// onCompleteEnd
		const onCompleteEnd = new OnMultipleAudioEvent(this);

		// audioEndNode
		new AudioEndNode(onCompleteEnd);

		// lists
		const musicGroup = [onMultipleAudioEndLv, onAudioGameover];
		const sfxGroup = [onAudioFullScreen, onAudioNewspaper, onMultipleAudioCrawl, onMultipleAudioStep, onAudioVolume, onAudioPlay, onAudioBack, onAudioClick, onAudioDash, onAudioJumpLand, onAudioJump];
		const audioEvents = [onAudioNewspaper, onMultipleAudioCrawl, onMultipleAudioStep, onAudioVolume, onAudioPlay, onAudioBack, onAudioClick, onAudioFullScreen, onAudioDash, onAudioJumpLand, onAudioJump, onMultipleAudioEndLv, onAudioGameover];

		// onAudioFullScreen (prefab fields)
		onAudioFullScreen.eventName = "sfx-fullscreen";
		onAudioFullScreen.audioKey = "Menu_SFX_Fullscreen";

		// onAudioClick (prefab fields)
		onAudioClick.eventName = "sfx-click";
		onAudioClick.audioKey = "Menu_SFX_Click";

		// onAudioBack (prefab fields)
		onAudioBack.eventName = "sfx-back";
		onAudioBack.audioKey = "Menu_SFX_Back";

		// onAudioPlay (prefab fields)
		onAudioPlay.eventName = "sfx-play";
		onAudioPlay.eventEmitter = "game.events";
		onAudioPlay.audioKey = "Menu_SFX_Play";

		// onAudioVolume (prefab fields)
		onAudioVolume.eventName = "sfx-volume";
		onAudioVolume.audioKey = "Menu_SFX_Volume_Sliders";

		// onMultipleAudioStep (prefab fields)
		onMultipleAudioStep.eventName = "sfx-step";
		onMultipleAudioStep.audioKeyPrefix = "Dog_SFX_Step_";

		// onMultipleAudioCrawl (prefab fields)
		onMultipleAudioCrawl.eventName = "sfx-crawl";
		onMultipleAudioCrawl.audioKeyPrefix = "Dog_SFX_Crawl_";

		// onAudioNewspaper (prefab fields)
		onAudioNewspaper.eventName = "sfx-newspaper";
		onAudioNewspaper.audioKey = "Newspaper_SFX";

		// onAudioDash (prefab fields)
		onAudioDash.eventName = "sfx-dash";
		onAudioDash.audioKey = "Dog_SFX_Dash";

		// onAudioJump (prefab fields)
		onAudioJump.eventName = "sfx-jump";
		onAudioJump.audioKey = "Dog_SFX_Jumping";

		// onAudioJumpLand (prefab fields)
		onAudioJumpLand.eventName = "sfx-jumpland";
		onAudioJumpLand.audioKey = "Dog_SFX_Jumping_landing";

		// onMultipleAudioEndLv (prefab fields)
		onMultipleAudioEndLv.eventName = "sfx-endlevel";
		onMultipleAudioEndLv.audioKeyPrefix = "End_Of_Level_Music";

		// onAudioGameover (prefab fields)
		onAudioGameover.eventName = "sfx-gameover";
		onAudioGameover.audioKey = "Game_Over_Music";

		// onGameOverEnd (prefab fields)
		onGameOverEnd.eventName = "sfx-gameover-end";
		onGameOverEnd.audioKey = "Game_Over_Music";

		// onCompleteEnd (prefab fields)
		onCompleteEnd.eventName = "sfx-endlevel-end";
		onCompleteEnd.audioKeyPrefix = "End_";

		this.stateMachineNode = stateMachineNode;
		this.importAllAudio = importAllAudio;
		this.musicGroup = musicGroup;
		this.sfxGroup = sfxGroup;
		this.audioEvents = audioEvents;

		this.events.emit("scene-awake");
	}

	private stateMachineNode!: StateMachineNode;
	private importAllAudio!: ImportAllAudio;
	private musicGroup!: Array<OnMultipleAudioEvent|OnAudioEvent>;
	private sfxGroup!: Array<OnAudioEvent|OnMultipleAudioEvent>;
	private audioEvents!: Array<OnAudioEvent|OnMultipleAudioEvent>;

	/* START-USER-CODE */
	private levelScene = ["Level1", "Level2", "Level3"]
	private currLevel = 0

	// Write your code here

	create() {

		this.editorCreate()

		this.initAudioVolume()

		eventsCenter.on("change-music-volume", (newVal: number) => {
			this.importAllAudio.MusicAudioList.forEach(node => {
				if(node.volume) {
					node.setVolume(Phaser.Math.Clamp(newVal, 0.01, 1))
				}
			})

			this.registry.set('music-vol', newVal)
		}, this)

		eventsCenter.on("change-sfx-volume", (newVal: number) => {
			this.importAllAudio.SFXAudioList.forEach(node => {
				if(node.volume) {
					node.setVolume(Phaser.Math.Clamp(newVal, 0.01, 1))
				}
			})

			this.registry.set('sfx-vol', newVal)
		}, this)

		this.currLevel = this.currLevel % this.levelScene.length

		this.stateMachineNode.id = "game-state"
		this.stateMachineNode.contextSetter = this

		this.stateMachineNode.addState("main-menu", {
			onEnter: () => {
				this.mainMenuOnEnter()
			},
			onExit: () => {
				this.mainMenuOnExit()
			}
		}).addState("settings", {
			onEnter: () => {
				this.settingsOnEnter()
			},
			onExit: () => {
				this.settingsOnExit()
			}
		}).addState("level", {
			onEnter: () => {this.levelOnEnter()}
		}).addState("pause", {
			onEnter: () => {this.pauseOnEnter()},
			onExit: () => {this.pauseOnExit()}
		}).addState("restart", {
			onEnter: () => {this.restartOnEnter()}
		}).addState("complete", {
			onEnter: () => {this.completeOnEnter()},
			onExit: () => {this.completeOnExit()}
		}).addState("gameover", {
			onEnter: () => {this.gameoverOnEnter()},
			onExit: () => {this.gameoverOnExit()}
		}).setState("main-menu")

		// The game can have several states
		// Main menu states
		// Settings
		// In Level. can be a collection of levels
		// In Pause
		// (add a in restart transition state)
		// Level complete

		this.registry.set("level-key", "")

		eventsCenter.on("change-game-state", this.changeState, this)
		this.scene.bringToTop()
	}

	private initAudioVolume() {
		// set the volume of both sfx and music volume as 1 and save in local storage

		this.registry.set('music-vol', 1)
		this.registry.set('sfx-vol', 1)
	}

	private changeState(stateKey: string) {

		this.stateMachineNode.setState(stateKey)
	}

	private mainMenuOnEnter() {
		if(this.stateMachineNode.previousStateName === "level") {
			const levelMusic = this.scene.scene.sound.get("Level_Music")
			levelMusic?.stop()
			this.scene.stop("UIScreen")
			this.scene.stop(this.levelScene[this.currLevel])		
		}

		this.scene.launch("MainMenu")
		const menuMusic = this.scene.scene.sound.get("Menu_Music")
		menuMusic?.play()
	}

	private gameoverOnEnter() {
		const { stateMachineNode } = this
		// check if previous state is level
		if(stateMachineNode.previousStateName === "level")
		{
			eventsCenter.emit("to-gameover")

			this.scene.stop("UIScreen")
		} 

		eventsCenter.emit("sfx-gameover")
	}

	private gameoverOnExit() {
		// scene transition can only be invoked on the source scene
		eventsCenter.emit("to-level", this.levelScene[this.currLevel])
		eventsCenter.emit('sfx-gameover-end')

	}

	private mainMenuOnExit() {
		this.scene.stop("MainMenu")
	}

	private settingsOnEnter() {
		this.scene.launch("Settings")
	}

	private settingsOnExit() {
		this.scene.stop("Settings")
	}

	private levelOnEnter() {
		const menuMusic = this.scene.scene.sound.get("Menu_Music")
		menuMusic?.stop()

		if(this.stateMachineNode.previousStateName === "pause") {
			return
		}

		const levelMusic = this.scene.scene.sound.get("Level_Music")
		levelMusic?.play()

		this.scene.launch("UIScreen")
		this.scene.launch(this.levelScene[this.currLevel])
		this.registry.set("level-key", this.levelScene[this.currLevel])
		this.scene.bringToTop("UIScreen")
	}

	private pauseOnEnter() {
		this.scene.pause(this.levelScene[this.currLevel])
		this.scene.launch("Pause")
		this.scene.bringToTop("Pause")

		const levelMusic = this.scene.scene.sound.get("Level_Music")
		levelMusic?.stop()
		eventsCenter.emit(PAUSE_GAME)
	}

	private pauseOnExit() {
		this.scene.resume(this.levelScene[this.currLevel])
		this.scene.stop("Pause")
		const levelMusic = this.scene.scene.sound.get("Level_Music")
		levelMusic?.play()
		eventsCenter.emit(RESUME_GAME)
	}

	private restartOnEnter() {
		this.scene.stop("UIScreen")
		this.scene.pause(this.levelScene[this.currLevel])

		const levelMusic = this.scene.scene.sound.get("Level_Music")
		levelMusic?.stop()

		const fx = this.cameras.main.postFX.addWipe()

		this.scene.transition({
			target: this.levelScene[this.currLevel],
			duration: 1000,
			moveBelow: true,
			onUpdate: (progress: number) => {
				fx.progress = progress
			}
		})

		this.stateMachineNode.setState("level")
	}

	private completeOnEnter() {
		this.scene.stop("UIScreen")
		this.scene.stop(this.levelScene[this.currLevel])

		const levelMusic = this.scene.scene.sound.get("Level_Music")
		levelMusic?.stop()

		eventsCenter.emit("sfx-endlevel")

		this.time.delayedCall(300, () => {
			this.scene.launch("CompleteLv")
		})
	}

	private completeOnExit() {
		this.scene.stop("CompleteLv")
		// add function to increase level count to load next level
		const maxLvNum = this.levelScene.length - 1
		this.currLevel = this.currLevel + 1 > maxLvNum ? 0 : this.currLevel + 1
		// console.info("currlevel: ", this.currLevel)
		
		eventsCenter.emit('sfx-endlevel-end')
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
