
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FullScreenButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 320, y ?? 240, texture || "fullscreen", frame);

		/* START-USER-CTR-CODE */
        this.setInteractive(); // Make the button interactive
        this.on('pointerup', this.toggleFullScreen, this); // Toggle fullscreen on pointerup event
        scene.add.existing(this); // Add the button to the scene
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	toggleFullScreen() {
		console.log('test');

		const { scale } = this.scene;

        // Check if the game is already in fullscreen mode
        if (!scale.isFullscreen) {
            // If not, start fullscreen
            scale.startFullscreen();
        } else {
            // If it is, stop fullscreen
            scale.stopFullscreen();
        }
    }


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
