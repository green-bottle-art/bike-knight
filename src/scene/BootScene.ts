import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
      super('BootScene');
  }

  preload() {
      // Load splash image
      this.load.image('splashLogo', '/logo-light.png');
  }

  create() {
      // Centered splash image
      // this.add.image(400, 300, 'splash');
      // this.cameras.main.fadeOut(1000, 0, 0, 0);
      this.cameras.main.setBackgroundColor('#1e1e1e');
      // this.cameras.main.fadeOut(2000, 0, 0, 0);

      // this.time.delayedCall(2000, () => {
          // this.cameras.main.setBackgroundColor('#df03fc');
          // this.cameras.main.fadeOut(1000, 0, 0, 0);
      // });

      // this.time.delayedCall(4000, () => {
          // this.cameras.main.setBackgroundColor('#fc0339');
          // this.cameras.main.fadeOut(1000, 0, 0, 0);
      // });

      // Tranition to MenuScene after delay
      // this.time.delayedCall(6000, () => {
          // this.scene.start('MenuScene');
      // });


      // add logo to the center screen
      const logo = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'splashLogo'
      );

      // Set initial alpha  to 0  so it start invisible
      logo.setAlpha(0);

      // Create fade in, hold and fade out
      this.tweens.add({
        targets: logo,
        alpha: 1,
        duration: 1000,
        ease: 'Power2',
        yoyo: true,       // Reverse tweens
        hold: 2000,       // Keeps logo visible for 2 seconds
        onComplete: () => {
          this.scene.start('MenuScene');
        }
      });
  }
}

