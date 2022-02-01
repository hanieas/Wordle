import { FC } from "react";
import { CAMEL_LETTERS } from "../../global/global";
import Key from "../key/key";
import { IKeyboard, ISelectedLetter } from "./keyboard-interface";
import "./keyboard.scss";

const KeyBorad: FC<IKeyboard> = (props: IKeyboard) => {
  const { selectedLetters, pressVirualKeyBoard, pressEnter, pressBackspace } =
    props;
  return (
    <div id="keyboard">
      <div className="row">
        {CAMEL_LETTERS.slice(0, 10).map((key: string) => {
          const letter = selectedLetters.find((item: ISelectedLetter) => item.letter === key.toLowerCase());
          return (
            <Key
              name={key}
              state={letter ? letter.state : ""}
              pressVirualKeyBoard={pressVirualKeyBoard}
            />
          );
        })}
      </div>
      <div className="row">
        {CAMEL_LETTERS.slice(10, 19).map((key: string) => {
          const letter = selectedLetters.find((item: ISelectedLetter) => item.letter === key.toLowerCase());
          return (
            <Key
              name={key}
              state={letter ? letter.state : ""}
              pressVirualKeyBoard={pressVirualKeyBoard}
            />
          );
        })}
      </div>
      <div className="row">
        {CAMEL_LETTERS.slice(19, 29).map((key: string) => {
         const letter = selectedLetters.find((item: ISelectedLetter) => item.letter === key.toLowerCase() );
          return (
            <Key
              name={key}
              state={letter ? letter.state : ""}
              pressVirualKeyBoard={pressVirualKeyBoard}
              pressEnter={pressEnter}
              pressBackspace={pressBackspace}
            />
          );
        })}
      </div>
    </div>
  );
};
export default KeyBorad;
