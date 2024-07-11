class Char {
  key: String;
  name: String;

  // --- common
  level: number = 1;
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
  }

  getName(): string {
    switch (this.key) {
      case "dw":
        if (this.level < 150) return "Dark Wizard";
        if (this.level == 400) return "Grand Master";
        return "Soul Master";
      case "dk":
        if (this.level < 150) return "Blade Knight";
        if (this.level == 400) return "Blade Master";
        return "Dark Knight";
      case "elf":
        if (this.level < 150) return "Muse Elf";
        if (this.level == 400) return "High Elf";
        return "Fairy Elf";
      case "mg":
        if (this.level == 400) return "Duel Master";
        return "Magic Gladiator";
      case "dl":
        if (this.level == 400) return "Lord Emperor";
        return "Dark Lord";
      case "sum":
        if (this.level < 150) return "Summoner";
        if (this.level == 400) return "Dimension Master";
        return "Bloody Summoner";
      case "rf":
        if (this.level == 400) return "Fist Master";
        return "Rage Fighter";
      default:
        break;
    }
    return "Character";
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

  getPoint(): number {
    return 2000;
  }

  getRPoint(): number {
    return (
      this.getPoint() - this.str - this.agi - this.vit - this.ene - this.cmd
    );
  }

  // --- Dark Knight
  getComboDmg(): number {
    return 0;
  }
}

export { Char };
