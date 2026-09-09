class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Load splash image
        this.load.image('splash', '');
    }

    create() {
        // Centered splash image
        this.add.image(400, 300, 'splash');

        // Tranition to MenuScene after delay
        this.time.delayedCall(2000, () => {
            this.scene.start('MenuScene');
        });
    }
}