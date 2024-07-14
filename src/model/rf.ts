import { BaseChar, CHAR_RF } from "./char";

class RF extends BaseChar {
  constructor() {
    super(CHAR_RF);
  }

  getName(): string {
    if (this.level == 400) return "Fist Master";
    return "Rage Fighter";
  }
}

export { RF };
