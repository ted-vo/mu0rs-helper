import { BaseChar, CHAR_DK } from "./char";

class DK extends BaseChar {
  constructor() {
    super(CHAR_DK);
  }

  getName(): string {
    if (this.level < 150) return "Dark Knight";
    if (this.level == 400) return "Blade Master";
    return "Blade Knight";
  }
}

export { DK };
