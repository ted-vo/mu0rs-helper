import { IChar } from "./char";
import { DK } from "./dk";
import { DL } from "./dl";
import { DW } from "./dw";
import { ELF } from "./elf";
import { MG } from "./mg";
import { RF } from "./rf";
import { SUM } from "./sum";

const NewChar = (key: String): IChar => {
  switch (key) {
    case "dw":
      return new DW();
    case "dk":
      return new DK();
    case "elf":
      return new ELF();
    case "mg":
      return new MG();
    case "dl":
      return new DL();
    case "sum":
      return new SUM();
    case "rf":
      return new RF();
    default:
      throw new Error(`Character ${key} not implemented.`);
  }
};

export { NewChar };
