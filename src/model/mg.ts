import { BaseChar, CHAR_MG } from "./char";

class MG extends BaseChar {
  constructor() {
    super(CHAR_MG);
  }

  initDefault(): void {
    super.initDefault();
    this.str = 26;
    this.agi = 26;
    this.vit = 26;
    this.ene = 26;
  }

  getName(): string {
    if (this.level == 400) return "Duel Master";
    return "Magic Gladiator";
  }

  getPoint(): number {
    let basePoint = 26 * 4;
    if (this.level == 400) {
      basePoint += 80;
    }

    return basePoint + (this.level - 1) * 7 + this.fruit;
  }
}

export { MG };
