import Phaser from "phaser"
import MainMenu from "./scenes/MainMenu";
import Level from "./scenes/Level";
import Preload from "./scenes/Preload";

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
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
	physics: {
    	default: "arcade",
    	arcade: {
    	  gravity: { y: 600 }
    	}
 	},
    scene: [Boot, Preload, Level, MainMenu]
});

game.scene.start("Boot");


