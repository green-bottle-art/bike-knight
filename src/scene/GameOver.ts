import Phaser from "phaser";

export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver')
    }


    preload(): void {
        
    }

    create(): void {
        this.cameras.main.setBackgroundColor('#03fc56');
    }

    override update(): void {

    }
}