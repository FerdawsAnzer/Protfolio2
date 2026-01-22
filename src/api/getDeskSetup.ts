import { deskSetups } from "src/Data/deskSetup";
import type { DeskSetup } from "src/Types/DeskSetup";

export function getDeskSetups(): Promise<DeskSetup[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(deskSetups);
    }, 300);
  });
}
