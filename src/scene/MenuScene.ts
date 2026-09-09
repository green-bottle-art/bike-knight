import Phaser from "phaser";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  preload(): void {
    // asset tombl
  }

  create(): void {
    // 1. Ambil lebar dan tinggi layar agar posisi mudah diatur ke tengah (center)
    const { width, height } = this.scale;

    // Background Color
    this.cameras.main.setBackgroundColor("#03befc");

    // 2. Judul Game
    const titleText = this.add.text(width / 2, height * 0.3, "Bike Knight", {
      fontSize: "48px",
      color: "#000000",
      fontStyle: "bold",
    });
    titleText.setOrigin(0.5); // Atur anchor point ke tengah teks

    // 3. Membuat Tombol "START" menggunakan Text
    const startButton = this.add.text(width / 2, height * 0.55, "START GAME", {
      fontSize: "32px",
      color: "#ffffff",
      backgroundColor: "#000000",
      padding: { x: 20, y: 10 },
    });
    startButton.setOrigin(0.5);

    // 4. Aktifkan fitur Interaktif pada tombol
    startButton.setInteractive({ useHandCursor: true });

    // Efek Hover (Saat mouse di atas tombol)
    startButton.on("pointerover", () => {
      startButton.setStyle({ fill: "#ff0" });
    });

    // Efek Out (Saat mouse keluar dari tombol)
    startButton.on("pointerout", () => {
      startButton.setStyle({ fill: "#ffffff" });
    });

    // Event Klik: berpindah ke MainScene (atau nama GameScene kamu)
    startButton.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }

  override update(): void {}
}
