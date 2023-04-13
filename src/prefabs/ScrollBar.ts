
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import {
	Slider
} from 'phaser3-rex-plugins/templates/ui/ui-components'
/* END-USER-IMPORTS */

export default class ScrollBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 356, y ?? 242);

		// bar
		const bar = scene.add.image(0, 0, "UI_Flat_Scrollbar_02");
		bar.scaleX = 3;
		this.add(bar);

		// handle
		const handle = scene.add.image(0, 0, "UI_Flat_Scrollbar_Handle_02");
		this.add(handle);

		// print0
		const print0 = scene.add.text(-39, -32, "", {});
		print0.text = "0";
		this.add(print0);

		this.bar = bar;
		this.handle = handle;
		this.print0 = print0;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once("scene-awake", this.awake, this);
		/* END-USER-CTR-CODE */
	}

	public bar: Phaser.GameObjects.Image;
	public handle: Phaser.GameObjects.Image;
	private print0: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here.
	private slider?: Slider

	awake() {
		const config = {
			width: 100,
			height: 20,
			orientation: 'x',
			reverseAxis: false,
			track: this.bar,
			thumb: this.handle,
			valuechangeCallback: (value: any) => {
				this.print0.text = value
			},
			space: {
				top: 4,
				bottom: 4
			},
			input: 'drag'
		}

		this.slider = new Slider(this.scene, config)
		this.scene.add.existing(this.slider)
		this.slider.layout()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
