// class FirstScene extends Phaser.Scene {
//   if (condition) {
//     this.scene.start('SecondScene')
//   }
// }


// this.cameras.main.fadeOut(3000);
// this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
//   this.scene.start('SecondScene')
// })

// Contoh transisi scene

import Phaser from "phaser";
import { GameScene } from "./scene/GameScene";
import { MenuScene } from "./scene/MenuScene";
import { GameOver } from "./scene/GameOver";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',

 
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight,
  },

  physics: {
    default: 'arcade',

    arcade: {
      gravity: {x: 0, y: 0},
      debug: true,
    },

  },

  scene: [MenuScene, GameScene, GameOver],
};

const game = new Phaser.Game(config);
game;