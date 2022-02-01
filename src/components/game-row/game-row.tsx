import GameTile from "../game-tile/game-tile";
import { SETTING } from "../../global/global";
import KeyBorad from "../keyboard/keyboard";
import "./game-row.scss";
import useGameRowHook from "./game-row-hook";
import { useEffect, useRef } from "react";

const GameRow = () => {
  const {
    onKeyPressed,
    pressEnter,
    pressLetter,
    pressBackspace,
    states,
    animations,
    tryStates,
    guessedWords,
    message,
    selectedLetters,
  } = useGameRowHook();

  const ref: any = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  var rows = [];
  for (var i = 0; i < SETTING.COUNT_OF_TRY; i++) {
    var tile = [];
    for (var j = 0; j < SETTING.LENGTH_OF_WORD; j++) {
      tile.push(
        <GameTile
          state={states[i][j]}
          content={guessedWords[i][j]}
          animation={animations[i][j]}
        />
      );
    }
    rows.push(
      <div className="row" data-state={tryStates[i]}>
        {tile}
      </div>
    );
  }

  return (
    <div onKeyDown={onKeyPressed} tabIndex={0} ref={ref}>
      <div id="board-container">
        <div id="board">{rows}</div>
        {message ? (
          <div className="notification" id="game-notification">
            {message}
          </div>
        ) : (
          ""
        )}
      </div>
      <KeyBorad
        selectedLetters={selectedLetters}
        pressVirualKeyBoard={pressLetter}
        pressEnter={pressEnter}
        pressBackspace={pressBackspace}
      />
    </div>
  );
};
export default GameRow;
