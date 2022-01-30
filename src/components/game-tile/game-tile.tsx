import { IGameTile } from "./game-tile-interface";
import "./game-tile.scss";
const GameTile = (props: IGameTile) => {
  const { state, content, onKeyPressed, tabIndex, animation } = props;

  return (
    <div
      className="tile"
      data-state={state}
      onKeyDown={onKeyPressed}
      tabIndex={tabIndex}
      data-animation={animation}
    >
      {content}
    </div>
  );
};
export default GameTile;
