import Phaser from "phaser";
import { Player } from "../entities/Player";

export class GameScene extends Phaser.Scene {
  // Properti untuk menyimpan referensi pemain
  private player!: Player;

  constructor() {
    super('GameScene');
  }

  preload(): void {
    // Membuat gambar karakter 
    this.load.spritesheet('playerSpriteSheet', 'src/assets/player-spritesheet.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create(): void {

    // Background color
    this.cameras.main.setBackgroundColor('#fcba03');
    this.player = new Player(this, 400, 300);
  }
    
  override update(): void {
    this.player.updatePlayer();
  }
}