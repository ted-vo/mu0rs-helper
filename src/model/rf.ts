import { BaseChar, CHAR_RF } from "./char";

class RF extends BaseChar {
  constructor() {
    super(CHAR_RF);
  }

  initDefault(): void {
    super.initDefault();
    this.str = 32;
    this.agi = 27;
    this.vit = 25;
    this.ene = 20;
  }

  getName(): string {
    if (this.level == 400) return "Fist Master";
    return "Rage Fighter";
  }

  getPoint(): number {
    let basePoint = 32 + 27 + 25 + 20;

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

export { RF };
