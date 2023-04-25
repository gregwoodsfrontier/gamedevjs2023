
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
		this.theme_1_Node = theme_1_Node;
		this.menuThemeNode = menuThemeNode;

		this.events.emit("scene-awake");
	}

	private stateMachineNode!: StateMachineNode;
	private theme_1_Node!: AudioAddNode;
	private menuThemeNode!: AudioAddNode;

	/* START-USER-CODE */
	private levelScene = ["Level1", "Level2", "Level3"]
	private currLevel = 1

	// Write your code here

	create() {

		this.editorCreate()

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

		// this.events.on("change-game-state", this.changeState, this)
		eventsCenter.on("change-game-state", this.changeState, this)
		this.scene.bringToTop()
	}

	private changeState(stateKey: string) {

		this.stateMachineNode.setState(stateKey)
	}

	private mainMenuOnEnter() {
		if(this.stateMachineNode.previousStateName === "level") {
			this.theme_1_Node._g_audio?.stop()
			this.scene.stop("UIScreen")
			this.scene.stop(this.levelScene[this.currLevel])		
		}

		this.scene.launch("MainMenu")
		this.menuThemeNode._g_audio?.play()
	}

	private gameoverOnEnter() {
		const { stateMachineNode } = this
		// check if previous state is level
		if(stateMachineNode.previousStateName === "level")
		{
			eventsCenter.emit("to-gameover")
			this.scene.stop("UIScreen")
		} 
		
	}

	private gameoverOnExit() {
		// scene transition can only be invoked on the source scene
		eventsCenter.emit("to-level", this.levelScene[this.currLevel])
		
	}

	private mainMenuOnExit() {
		this.scene.stop("MainMenu")
		console.log(this.scene.manager.dump())
	}

	private settingsOnEnter() {
		this.scene.launch("Settings")
	}

	private settingsOnExit() {
		this.scene.stop("Settings")
	}

	private levelOnEnter() {
		this.menuThemeNode._g_audio?.stop()

		if(this.stateMachineNode.previousStateName === "pause") {
			return
		}

		this.theme_1_Node._g_audio?.play()
		this.scene.launch("UIScreen")
		this.scene.launch(this.levelScene[this.currLevel])
		this.scene.bringToTop("UIScreen")

		this.scene.manager.dump()

	}

	private pauseOnEnter() {
		this.scene.pause(this.levelScene[this.currLevel])
		this.scene.launch("Pause")
		this.scene.bringToTop("Pause")
		this.theme_1_Node._g_audio?.stop()
		eventsCenter.emit(PAUSE_GAME)
	}

	private pauseOnExit() {
		this.scene.resume(this.levelScene[this.currLevel])
		this.scene.stop("Pause")
		this.theme_1_Node._g_audio?.play()
		eventsCenter.emit(RESUME_GAME)
	}

	private restartOnEnter() {
		this.scene.stop("UIScreen")
		this.scene.pause(this.levelScene[this.currLevel])

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
		this.theme_1_Node._g_audio?.stop()

		this.time.delayedCall(300, () => {
			this.scene.launch("CompleteLv")
		})
	}

	private completeOnExit() {
		this.scene.stop("CompleteLv")
		// add function to increase level count to load next level
		this.currLevel = Phaser.Math.Clamp(this.currLevel + 1, 0, this.levelScene.length - 1)
		console.log(`current level is ${this.currLevel}`)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
