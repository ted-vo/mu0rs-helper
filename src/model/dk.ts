import { BaseChar, CHAR_DK } from "./char";

class DK extends BaseChar {
  constructor() {
    super(CHAR_DK);
  }

  initDefault(): void {
    super.initDefault();
    this.str = 28;
    this.agi = 20;
    this.vit = 25;
    this.ene = 10;
    this.maxFruit = 127;
  }

  getName(): string {
    if (this.level < 150) return "Dark Knight";
    if (this.level == 400) return "Blade Master";
    return "Blade Knight";
  }

  getPoint(): number {
    let basePoint = 28 + 20 + 25 + 10;

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

export { DK };
