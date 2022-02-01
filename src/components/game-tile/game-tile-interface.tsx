import { KEY_STATE } from "../../global/global";

export interface IGameTile {
  state?: KEY_STATE;
  content?: string|null;
  onKeyPressed?:any;
  tabIndex?: number;
  animation?: string
}
