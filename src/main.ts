import Phaser from "phaser"
import MainMenu from "./scenes/MainMenu";
import Preload from "./scenes/Preload";
import Settings from "./scenes/Settings";
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import Level2 from "./scenes/Level2";
import UIScreen from "./scenes/UIScreen";
import Pause from "./scenes/Pause";
import Controller from "./scenes/Controller";
import CompleteLv from "./scenes/CompleteLv";
import Level3 from "./scenes/Level3";
import Level1 from "./scenes/Level1";
import Gameover from "./scenes/Gameover";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {

       this.scene.start("Preload");
    }
}

const game = new Phaser.Game({
    width: 640,
    height: 360,
    backgroundColor: "#2f2f2f",
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
	physics: {
    	default: "arcade",
    	arcade: {
            // debug: true,
    	    gravity: { y: 600 }
    	}
 	},
    plugins: {
        scene: [{
            key: 'rexuiplugin',
            plugin: UIPlugin,
            mapping: 'rexUI'
        }
        // ...
        ]
    },
    scene: [
        Boot, Preload, Controller, 
        Level1, MainMenu, Settings, 
        Level2, UIScreen, Pause, CompleteLv,
        Level3, Gameover
    ]
});

game.scene.start("Boot");


