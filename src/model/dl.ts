import { BaseChar, CHAR_DL } from "./char";

class DL extends BaseChar {
  constructor() {
    super(CHAR_DL);
  }

  initDefault(): void {
    super.initDefault();
    this.str = 26;
    this.agi = 20;
    this.vit = 20;
    this.ene = 15;
    this.cmd = 25;
  }

  getName(): string {
    if (this.level == 400) return "Lord Emperor";
    return "Dark Lord";
  }

  getPoint(): number {
    let basePoint = 26 + 20 + 20 + 15 + 25;

    if (this.level > 220) {
      basePoint += (this.level - 220) * 6 + 220 * 5;
    } else {
      basePoint += (this.level - 1) * 5;
    }

    if (this.level == 400) {
      basePoint += 80;
    }

    return basePoint + this.fruit;
  }
}

export { DL };
