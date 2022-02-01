import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import {
  ANIMATIONS,
  KEYBOARD,
  KEY_STATE,
  MESSAGE,
  SETTING,
} from "../../global/global";
import { gameWords } from "../../global/game-words";
import {
  findDateDiff,
  isEvent,
  isValidChar,
  removeByAttr,
} from "./game-row-helper";
import { IKeyBoardEvent } from "./game-row-interface";
var words = require("an-array-of-english-words");

const useGameRowHook = () => {
  const [message, setMessage] = useState("");
  const initialGuessedWords = Array.from(Array(SETTING.COUNT_OF_TRY), () =>
    new Array(SETTING.LENGTH_OF_WORD).fill(null)
  );
  const initialStates = Array.from(Array(SETTING.COUNT_OF_TRY), () =>
    new Array(SETTING.LENGTH_OF_WORD).fill(KEY_STATE.EMPTY)
  );
  const [guessedWords, setGuessedWords]: Array<any> =
    useState(initialGuessedWords);
  const [states, setStates]: any = useState(initialStates);
  const [animations, setAnimations]: any = useState(
    Array.from(Array(SETTING.COUNT_OF_TRY), () =>
      new Array(SETTING.LENGTH_OF_WORD).fill(null)
    )
  );
  const [tryStates, setTryStates] = useState(
    new Array(SETTING.COUNT_OF_TRY).fill(null)
  );
  const [number, setNumber] = useState(0);
  const [tryCount, setTryCount] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState<any>([]);
  const [cookies, setCookie] = useCookies([
    "index",
    "states",
    "guessedWords",
    "selectedLetters",
    "tryCount",
    "number",
    "gameFinished",
    "animations",
  ]);
  const [word, setWord]: any = useState("");
  const { Difference_In_Days: index } = findDateDiff();
  useEffect(() => {
    setWord(gameWords[index]);
    if (
      cookies.guessedWords &&
      cookies.states &&
      cookies.selectedLetters &&
      parseInt(cookies.index) === index
    ) {
      setGuessedWords(cookies.guessedWords);
      setStates(cookies.states);
      setSelectedLetters(cookies.selectedLetters);
      setTryCount(parseInt(cookies.tryCount));
      setNumber(parseInt(cookies.number));
      setAnimations(cookies.animations);
      if (parseInt(cookies.gameFinished) === 1) {
        setGameFinished(true);
      }
    }
  }, [
    index,
    cookies.guessedWords,
    cookies.states,
    cookies.selectedLetters,
    cookies.index,
    cookies.tryCount,
    cookies.number,
    cookies.gameFinished,
    cookies.animations,
  ]);
  const splitedWord = word.split("");

  const refreshMessage = (content: string, miniSec: number = 1000) => {
    setMessage(content);
    setTimeout(() => {
      setMessage("");
    }, miniSec);
  };

  const refreshStates = (state: string) => {
    tryStates[tryCount] = state;
    setTryStates(tryStates);
    setTimeout(() => {
      setTryStates(new Array(SETTING.COUNT_OF_TRY).fill(null));
    }, 1000);
  };

  const pressLetter = (event: IKeyBoardEvent | string) => {
    if (number < SETTING.LENGTH_OF_WORD && !gameFinished) {
      if (isEvent(event)) {
        guessedWords[tryCount][number] = event.key.toLowerCase();
      } else {
        guessedWords[tryCount][number] = event.toLowerCase();
      }
      states[tryCount][number] = KEY_STATE.TBD;
      setGuessedWords(guessedWords);
      setStates(states);
      setNumber(number + 1);
    }
  };

  const pressEnter = () => {
    if (!gameFinished) {
      if (number < SETTING.LENGTH_OF_WORD) {
        refreshMessage(MESSAGE.NOT_ENOUGH_LETTER);
        refreshStates("invalid");
      } else {
        if (words.includes(guessedWords[tryCount].join(""))) {
          for (var i: number = 0; i < SETTING.LENGTH_OF_WORD; i++) {
            let keyState;
            if (guessedWords[tryCount][i] === splitedWord[i]) {
              removeByAttr(
                selectedLetters,
                "letter",
                guessedWords[tryCount][i]
              );
              keyState = KEY_STATE.CORRECT;
            } else if (splitedWord.includes(guessedWords[tryCount][i])) {
              keyState = KEY_STATE.PRESENT;
            } else {
              keyState = KEY_STATE.ABSENT;
            }
            states[tryCount][i] = keyState;
            selectedLetters.push({
              letter: guessedWords[tryCount][i],
              state: keyState,
            });
            setStates(states);
            setSelectedLetters(selectedLetters);
          }
          if (tryCount === SETTING.COUNT_OF_TRY - 1) {
            setGameFinished(true);
          }
          if (guessedWords[tryCount].join("") === word) {
            animations[tryCount].fill(ANIMATIONS.SCALE_CENTER);
            setAnimations(animations);
            refreshMessage(MESSAGE.CORRECT);
            setGameFinished(true);
            setCookie("gameFinished", 1);
          } else {
            animations[tryCount].fill(ANIMATIONS.SCALE_CENTER);
            setAnimations(animations);
            const nextTry = tryCount + 1;
            setTryCount(nextTry);
            setNumber(0);
            if (tryCount === SETTING.COUNT_OF_TRY - 1) {
              refreshMessage(word, 3000);
              setCookie("gameFinished", 1);
            } else {
              refreshMessage(MESSAGE.INCORRECT);
              setCookie("tryCount", nextTry);
              setCookie("number", 0);
              setCookie("gameFinished", 0);
            }
          }
          setCookie("states", JSON.stringify(states));
          setCookie("guessedWords", JSON.stringify(guessedWords));
          setCookie("selectedLetters", JSON.stringify(selectedLetters));
          setCookie("animations", JSON.stringify(animations));
          setCookie("index", index);
        } else {
          refreshMessage(MESSAGE.NOT_EXIST);
        }
      }
    }
  };

  const pressBackspace = () => {
    if (number > 0 && !gameFinished) {
      states[tryCount][number - 1] = KEY_STATE.EMPTY;
      guessedWords[tryCount][number - 1] = null;
      setStates(states);
      setGuessedWords(guessedWords);
      setNumber(number - 1);
    }
  };

  const onKeyPressed = (event: IKeyBoardEvent) => {
    if (!gameFinished) {
      if (isValidChar(event)) {
        pressLetter(event);
      } else if (event.keyCode === KEYBOARD.BACKSPACE) {
        pressBackspace();
      } else if (event.keyCode === KEYBOARD.ENTER) {
        pressEnter();
      }
    } else {
      refreshMessage(MESSAGE.FINISH_GAME);
    }
  };

  return {
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
  };
};
export default useGameRowHook;
