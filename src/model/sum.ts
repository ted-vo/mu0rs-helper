import { BaseChar, CHAR_SUM } from "./char";

class SUM extends BaseChar {
  constructor() {
    super(CHAR_SUM);
  }

  initDefault(): void {
    super.initDefault();
    this.str = 21;
    this.agi = 21;
    this.vit = 18;
    this.ene = 23;
  }

  getName(): string {
    if (this.level < 150) return "Summoner";
    if (this.level == 400) return "Dimension Master";
    return "Bloody Summoner";
  }

  getPoint(): number {
    let basePoint = 21 + 21 + 18 + 23;

    if (this.level > 220) {
      basePoint += (this.level - 220) * 6 + 220 * 5;
    } else {
      basePoint += this.level * 5;
    }

    if (this.level == 400) {
      basePoint += 85;
    }

    return basePoint + this.fruit;
  }
}

export { SUM };
