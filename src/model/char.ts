class Char {
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
  create: number;

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
  }

  // --- stat

  // --- action point
  getHP(_props: any): number {
    return 0;
  }
  getSD(_props: any): number {
    return 0;
  }
  getAG(_props: any): number {
    return 0;
  }
  getMP(_props: any): number {
    return 0;
  }

  // --- Dark Knight
  getComboDmg(): number {
    return 0;
  }
}

export { Char };
