import Phaser from "phaser";
import { GameScene } from "./GameScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',

 
  scale: {
    mode: Phaser.Scale.FIT,
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

  scene: GameScene,
};

new Phaser.Game(config);