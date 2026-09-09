import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Load splash image
        // this.load.image('splash', '');
    }

    create() {
        // Centered splash image
        // this.add.image(400, 300, 'splash');
        this.cameras.main.setBackgroundColor('#0307fc');

        this.time.delayedCall(2000, () => {
            this.cameras.main.setBackgroundColor('#df03fc');
        });

        this.time.delayedCall(4000, () => {
            this.cameras.main.setBackgroundColor('#fc0339');
        });

        // Tranition to MenuScene after delay
        this.time.delayedCall(6000, () => {
            this.scene.start('MenuScene');
        });
    }
}