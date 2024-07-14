import { BaseChar, CHAR_DL } from "./char";

class DL extends BaseChar {
  constructor() {
    super(CHAR_DL);
  }

  getName(): string {
    if (this.level == 400) return "Lord Emperor";
    return "Dark Lord";
  }
}

export { DL };
