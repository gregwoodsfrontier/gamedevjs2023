
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FullScreenButton from "../prefabs/FullScreenButton";
import StateMachineNode from "../prefabs/scriptNodes/StateMachineNode";
import AudioAddNode from "../prefabs/scriptNodes/AudioAddNode";
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

		// theme_1_Node
		const theme_1_Node = new AudioAddNode(this);

		// menuThemeNode
		const menuThemeNode = new AudioAddNode(this);

		// theme_1_Node (prefab fields)
		theme_1_Node.audioKey = "theme_1";

		// menuThemeNode (prefab fields)
		menuThemeNode.audioKey = "Menu_Theme";

		this.stateMachineNode = stateMachineNode;
		this.menuThemeNode = menuThemeNode;

		this.events.emit("scene-awake");
	}

	private stateMachineNode!: StateMachineNode;
	private menuThemeNode!: AudioAddNode;

	/* START-USER-CODE */
	private levelScene = ["Level", "Level2", "Level3"]
	private currLevel = 0

	// Write your code here

	create() {

		this.editorCreate()

		this.stateMachineNode.addState("main-menu", {
			onEnter: this.mainMenuOnEnter,
			onExit: this.mainMenuOnExit
		}).addState("settings", {
			onEnter: this.settingsOnEnter,
			onExit: this.settingsOnExit
		}).addState("level", {
			onEnter: this.levelOnEnter,
			onExit: this.levelOnExit
		}).addState("pause", {
			onEnter: this.pauseOnEnter,
			onExit: this.pauseOnExit
		}).addState("restart", {
			onEnter: this.restartOnEnter
		}).addState("complete", {
			onEnter: this.completeOnEnter,
			onExit: this.completeOnExit
		}).setState("main-menu")

		// The game can have several states
		// Main menu states
		// Settings
		// In Level. can be a collection of levels
		// In Pause
		// (add a in restart transition state)
		// Level complete

		this.events.on("change-game-state", this.changeState, this)
	}

	private changeState(stateKey: string) {
		this.stateMachineNode.setState(stateKey)
	}

	private mainMenuOnEnter() {
		this.scene.launch("MainMenu")
		this.menuThemeNode._g_audio?.play()
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
		this.menuThemeNode._g_audio?.stop()
		this.scene.launch("UIScreen")

		if(!this.scene.isActive(this.levelScene[this.currLevel]))
		{
			this.scene.launch(this.levelScene[this.currLevel])
		}
		
	}

	private levelOnExit() {
		this.scene.stop("UIScreen")
		this.scene.stop(this.levelScene[this.currLevel])
	}

	private pauseOnEnter() {
		this.scene.pause(this.levelScene[this.currLevel])
		this.scene.launch("Pause")
		eventsCenter.emit(PAUSE_GAME)
	}

	private pauseOnExit() {
		this.scene.resume(this.levelScene[this.currLevel])
		this.scene.stop("Pause")
		eventsCenter.emit(RESUME_GAME)
	}

	private restartOnEnter() {
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
		this.time.delayedCall(500, () => {
			this.scene.launch("CompleteLv")
		})
	}

	private completeOnExit() {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
