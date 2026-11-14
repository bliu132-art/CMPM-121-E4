import Phaser from "phaser";
import { loadSounds } from "../sounds.ts";
import { makeTextures } from "../textures.ts";

export class BootScene extends Phaser.Scene {
  constructor() {
    super("boot");
  }

  create(): void {
    if (!this.textures.exists("player")) {
      makeTextures(this);
      loadSounds(this);
    }
    this.scene.start("title");
  }
}

/** Every scene uses the same fade before handing control to the next one. */
export function fadeTo(scene: Phaser.Scene, key: string, data = {}): void {
  scene.cameras.main.fadeOut(450, 4, 2, 12);
  scene.cameras.main.once("camerafadeoutcomplete", () => {
    scene.scene.start(key, data);
  });
}
