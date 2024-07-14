import { BaseChar } from "./char";

class DW extends BaseChar {
  constructor() {
    super("dw");
  }

  initDefault(): void {
    super.initDefault();
  }

  getName(): string {
    if (this.level < 150) return "Dark Wizard";
    if (this.level == 400) return "Grand Master";
    return "Soul Master";
  }
}

export { DW };
