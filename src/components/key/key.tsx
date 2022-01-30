import { FC } from "react";
import { IKey } from "./key-interface";
import "./key.scss";

const Key: FC<IKey> = (props: IKey) => {
  const { name, state, pressVirualKeyBoard, pressEnter, pressBackspace } =
    props;
  if (name === "ENTER") {
    return (
      <button
        type="button"
        data-key={name}
        data-state={state}
        onClick={pressEnter}
        className="one-and-a-half"
      >
        {name}
      </button>
    );
  } else if (name === "DELETE") {
    return (
      <button
        type="button"
        data-key={name}
        data-state={state}
        onClick={pressBackspace}
        className="two"
      >
        {name}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        data-key={name}
        data-state={state}
        onClick={() => pressVirualKeyBoard(name.toLowerCase())}
      >
        {name}
      </button>
    );
  }
};
export default Key;
