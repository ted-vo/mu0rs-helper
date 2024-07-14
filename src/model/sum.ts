import { BaseChar, CHAR_SUM } from "./char";

class SUM extends BaseChar {
  constructor() {
    super(CHAR_SUM);
  }

  initDefault(): void {
    super.initDefault();
  }

  getName(): string {
    if (this.level < 150) return "Summoner";
    if (this.level == 400) return "Dimension Master";
    return "Bloody Summoner";
  }
}

export { SUM };
