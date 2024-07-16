import { BaseChar, CHAR_ELF } from "./char";

class ELF extends BaseChar {
  constructor() {
    super(CHAR_ELF);
  }

  initDefault(): void {
    super.initDefault();
    this.str = 22;
    this.agi = 25;
    this.vit = 20;
    this.ene = 15;
  }

  getName(): string {
    if (this.level < 150) return "Fairy  Elf";
    if (this.level == 400) return "High Elf";
    return "Muse Elf";
  }

  getPoint(): number {
    let basePoint = 22 + 25 + 20 + 15;

    if (this.level > 220) {
      basePoint += (this.level - 220) * 6 + 220 * 5;
    } else {
      basePoint += (this.level - 1) * 5;
    }

    if (this.level == 400) {
      basePoint += 85;
    }

    return basePoint + this.fruit;
  }
}

export { ELF };
