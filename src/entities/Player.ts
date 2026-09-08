import Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite {
    private cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
    
    // Kecepatan gerakan karakter
    private readonly SPEED: number = 100;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'playerSpriteSheet', 0);

        // Menambahkan sprite ke scene dan physics
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.createAnimations();

        if (scene.input.keyboard) {
            this.cursor = scene.input.keyboard.createCursorKeys();
        }
    }

    private createAnimations(): void {
        if (this.scene.anims.exists('walk-down')) return;

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
    }

    public updatePlayer(): void {
        // Memastikan input keyboard sudah siap 
        if (!this.cursor) {
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
        this,this.setVelocity(velocityX * this.SPEED, velocityY * this.SPEED);

        if (velocityX < 0) this.anims.play('walk-left', true);
        else if (velocityX > 0) this.anims.play('walk-right', true);
        else if (velocityY < 0) this.anims.play('walk-up', true);
        else if (velocityY > 0) this.anims.play('walk-down', true);
        else this.anims.stop();
    }
}