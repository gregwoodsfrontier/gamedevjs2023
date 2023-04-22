
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FullScreenButton from "../prefabs/FullScreenButton";
import LaunchSceneNode from "../prefabs/scriptNodes/LaunchSceneNode";
/* START-USER-IMPORTS */
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

		// launchSceneNode
		const launchSceneNode = new LaunchSceneNode(this);

		// launchSceneNode (prefab fields)
		launchSceneNode.key = "MainMenu";

		this.launchSceneNode = launchSceneNode;

		this.events.emit("scene-awake");
	}

	private launchSceneNode!: LaunchSceneNode;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.launchMainMenu()

		// The game can have several states
		// Main menu states
		// Settings
		// In Level. can be a collection of levels
		// In Pause
		// (add a in restart transition state)
		// Level complete
	}

	launchMainMenu() {
		this.launchSceneNode.execute()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
