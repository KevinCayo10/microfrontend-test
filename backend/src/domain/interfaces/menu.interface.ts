import { BasesI } from "./shared.interface";

export interface MenuI extends BasesI {
  name: string;
  path: string;
  status: boolean;
}
