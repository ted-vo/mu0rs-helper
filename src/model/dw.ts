import { BaseChar, CHAR_DW } from "./char";

class DW extends BaseChar {
  constructor() {
    super(CHAR_DW);
  }

  initDefault(): void {
    super.initDefault();
    this.maxFruit = 127;
    this.str = 18;
    this.agi = 18;
    this.vit = 15;
    this.ene = 30;

    this.def = 4;
    this.defRate = 6;
    this.defPvPRate = 6;
  }

  getName(): string {
    if (this.level < 150) return "Dark Wizard";
    if (this.level == 400) return "Grand Master";
    return "Soul Master";
  }

  getPoint(): number {
    let basePoint = 18 + 18 + 15 + 30;

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

  getHP(): number {
    return 30 + (this.level - 1) + this.master + this.vit * 2;
  }
}

export { DW };
