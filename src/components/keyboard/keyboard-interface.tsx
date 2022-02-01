import { LETTER_STATE } from "../../global/global";

export interface IKeyboard {
    readonly selectedLetters: Array<ISelectedLetter>;
    readonly pressVirualKeyBoard:any
    readonly pressEnter : any;
    readonly pressBackspace : any;
}

export interface ISelectedLetter {
    readonly letter: string;
    readonly state: LETTER_STATE
}
