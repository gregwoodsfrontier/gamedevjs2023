
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import {
	RoundRectangle,
	Slider
} from 'phaser3-rex-plugins/templates/ui/ui-components'
/* END-USER-IMPORTS */

export default class ScrollBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// bar
		const bar = scene.add.nineslice(0, 0, "UI_Flat_Scrollbar_01", undefined, 40, 0, 1, 1, 0, 0);
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

	public bar: Phaser.GameObjects.NineSlice;
	public handle: Phaser.GameObjects.Image;
	private print0: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here.
	private slider?: Slider

	awake() {
		const COLOR_LIGHT = 0x7b5e57;
		const COLOR_DARK = 0x260e04;

		const _track = new RoundRectangle(this.scene, 0, 0, 0, 0, 6, COLOR_DARK)
		const _thumb = new RoundRectangle(this.scene, 0, 0, 0, 0, 10, COLOR_LIGHT)

		this.scene.add.existing(_track)
		this.scene.add.existing(_thumb)

		const config = {
			x: this.x,
			y: this.y,
			width: 100,
			height: 20,
			orientation: 'x',
			reverseAxis: false,
			track: _track,
			thumb: _thumb,
			// track: this.bar,
			// thumb: this.handle,
			valuechangeCallback: (value: any) => {
				this.print0.text = value
			},
			// space: {
			// 	top: 4,
			// 	bottom: 4
			// },
			input: 'drag'
		}

		this.slider = new Slider(this.scene, config)
		this.scene.add.existing(this.slider)
		this.slider.layout()

		// console.log(this.slider.getElement('thumb'))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
