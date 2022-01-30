export const KEYBOARD = {
  ENTER: 13,
  BACKSPACE: 8,
  A_KEY: 65,
  Z_KEY: 90,
};

export const MESSAGE = {
  CORRECT: "Correct",
  NOT_EXIST: "This word doesn't exist at all!",
  INCORRECT: "The word is incorrect!",
  NOT_ENOUGH_LETTER: "Not enough letters",
  FINISH_GAME: "Game is finished",
};

export enum LETTER_STATE {
  CORRECT = "correct",
  ABSENT = "absent",
  PRESENT = "present",
}

export enum KEY_STATE {
  PRESENT = "present",
  ABSENT = "absent",
  CORRECT = "correct",
  EMPTY = "empty",
  TBD = "tbd",
  POP = "pop",
}
export enum ANIMATIONS {
  SCALE_CENTER = "scale-in-center",
}
export const APP_NAME = "WORDLE";

export const SETTING = {
  COUNT_OF_TRY: 6,
  LENGTH_OF_WORD: 5,
};

export enum SVGICON {
  HELP = "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
  STATISTICS = "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
  CLOSE = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
}

export const CAMEL_LETTERS = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "DELETE",
];
