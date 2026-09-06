import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  // Properti untuk menyimpan referensi pemain
  private player!: Phaser.Physics.Arcade.Sprite;

  // Properti untuk membaca input keyboard
  private cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
  private arrowKeys!: {
    up: Phaser.Input.Keyboard.Key;
    left: Phaser.Input.Keyboard.Key;
    down: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
  };

  // Kecepatan gerakan karakter
  private readonly SPEED: number = 200;

  constructor() {
    super({key: 'MainScene'});
  }

  preload(): void {
    // Membuat gambar karakter 
    this.load.spritesheet('playerSpriteSheet', 'src/assets/player-spritesheet.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create(): void {
    // membuat sprite dari spritesheet
    // dimulai di frame index 0
    this.player = this.physics.add.sprite(400, 300, 'playerSpriteSheet', 0);
    this.player.setCollideWorldBounds(true);

    // Membuat definisi untuk arah mata angin
    // Adjust nilai frame  (0..3, 4..7, dll) sesuai gambar spritesheet

    // Down
    this.anims.create({
      key: 'walk-down',
      frames: this.anims.generateFrameNumbers('playeSpriteSheet', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1, // Terus berulang
    });

    // Up

    // Left
    
    // Right
  }
}