import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
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
    super({key: 'GameScene'});
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
      frames: this.anims.generateFrameNumbers('playerSpriteSheet', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1, // Terus berulang
    });

    // Up
    this.anims.create({
      key: 'walk-up',
      frames: this.anims.generateFrameNumbers('playerSpriteSheet', {start: 4, end: 7}),
      frameRate: 10,
      repeat: -1,
    });

    // Left
    this.anims.create({
      key: 'walk-left',
      frames: this.anims.generateFrameNumbers('playerSpriteSheet', {start: 8, end: 11}),
      frameRate: 10,
      repeat: -1,
    });

    // Right
    this.anims.create({
      key: 'walk-right',
      frames: this.anims.generateFrameNumbers('playerSpriteSheet', {start: 12, end: 15}),
      frameRate: 10,
      repeat: -1,
    });

    // Inisialisasi input control
    if (this.input.keyboard) {
      this.cursor = this.input.keyboard.createCursorKeys();
      this.arrowKeys = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
        down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      };
    }
  }

  override update(): void {
    // Memastikan input keyboard sudah siap 
    if (!this.cursor || !this.arrowKeys) {
      console.log('Gagal');
      return;
    }

    // Reser kecepatan di tiap awal frame
    let velocityX = 0;
    let velocityY = 0;

    // Masukan ke dalam variabel
    const isUp = this.cursor.up.isDown;
    const isLeft = this.cursor.left.isDown;
    const isDown = this.cursor.down.isDown;
    const isRight = this.cursor.right.isDown;

    // Cek arah horizntal dan vertcal
    if (isUp) velocityY = -1;
    else if (isDown) velocityY = 1

    if (isLeft) velocityX = -1;
    else if (isRight) velocityX = 1;

    //normalisasi vektor pergerakan
    // mencegah pergerakan diagonal berjalan lebih cepat
    if (velocityX !== 0 && velocityY !== 0) {
      // Nilai 0.7071 didapat dari Math.SQRT1_2 (1 / sqrt(2))
      velocityX *= 0.7071;
      velocityY *= 0.7071;
    }

    // terapkan kecepatan ke sprite
    this.player.setVelocityX (velocityX * this.SPEED);
    this.player.setVelocityY (velocityY * this.SPEED);

  }
}