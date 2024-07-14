import { BaseChar, CHAR_MG } from "./char";

class MG extends BaseChar {
  constructor() {
    super(CHAR_MG);
  }

  initDefault(): void {
    super.initDefault();
  }

  getName(): string {
    if (this.level == 400) return "Duel Master";
    return "Magic Gladiator";
  }
}

export { MG };
