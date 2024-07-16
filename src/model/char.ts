export const CHAR_DW = "dw";
export const CHAR_DK = "dk";
export const CHAR_ELF = "elf";
export const CHAR_MG = "mg";
export const CHAR_DL = "dl";
export const CHAR_SUM = "sum";
export const CHAR_RF = "rf";

export interface IChar {
  level: number;
  master: number;

  str: number;
  agi: number;
  vit: number;
  ene: number;
  cmd: number;
  fruit: number;
  maxFruit: number;

  initDefault(): void;
  getName(): String;
  getHP(): number;
  getSD(): number;
  getAG(): number;
  getMP(): number;
  getPoint(): number;
  getRPoint(): number;
}

class BaseChar implements IChar {
  key: String;
  name: String = "";

  // --- common
  level: number = 1;
  master: number = 0;

  // -- stat
  str: number = 0;
  agi: number = 0;
  vit: number = 0;
  ene: number = 0;
  cmd: number = 0;
  fruit: number = 0;
  maxFruit: number = 0;

  // -- attack
  minDmg: number = 0;
  maxDmg: number = 0;
  wizMinDmg: number = 0;
  wizMaxDmg: number = 0;
  skillDmg: number = 0;
  aoeDmg: number = 0;
  attackRate: number = 0;
  attackSpeed: number = 0;

  // -- defense
  def: number = 0;
  defRate: number = 0;
  defPvPRate: number = 0;

  constructor(key: String) {
    this.key = key;
    this.initDefault();
  }

  initDefault(): void {}

  setLevel(value: number): void {
    this.level = value;
  }
  getName(): String {
    return "Character";
  }
  getHP(): number {
    return 0;
  }
  getSD(): number {
    return 0;
  }
  getAG(): number {
    return 0;
  }
  getMP(): number {
    return 0;
  }
  getPoint(): number {
    return 9999;
  }
  getRPoint(): number {
    const p = this.getPoint();
    return p - this.str - this.agi - this.vit - this.ene - this.cmd;
  }
}

export { BaseChar };
