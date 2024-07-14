import { BaseChar, CHAR_ELF } from "./char";

class ELF extends BaseChar {
  constructor() {
    super(CHAR_ELF);
  }

  initDefault(): void {
    super.initDefault();
  }

  getName(): string {
    if (this.level < 150) return "Fairy  Elf";
    if (this.level == 400) return "High Elf";
    return "Muse Elf";
  }
}

export { ELF };
