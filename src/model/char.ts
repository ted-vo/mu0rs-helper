export const CHAR_DW = "dw";
export const CHAR_DK = "dk";
export const CHAR_ELF = "elf";
export const CHAR_MG = "mg";
export const CHAR_DL = "dl";
export const CHAR_SUM = "sum";
export const CHAR_RF = "rf";

export interface IChar {
  initDefault(): void;
  setLevel(value: number): void;
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
  name: String;

  // --- common
  level: number;
  master: number;

  // -- stat
  str: number;
  agi: number;
  vit: number;
  ene: number;
  cmd: number;
  fruit: number;

  // -- attack
  min_dmg: number;
  max_dmg: number;
  wiz_min_dmg: number;
  wiz_max_dmg: number;
  skill_dmg: number;
  aoe_dmg: number;
  attack_rate: number;
  attack_speed: number;

  // -- defense
  def: number;
  def_rate: number;
  def_pvp_rate: number;

  constructor(key: String) {
    this.key = key;
    this.initDefault();
  }

  initDefault(): void {
    this.level = 1;
  }
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
    return 9999;
  }
}

export { BaseChar };
