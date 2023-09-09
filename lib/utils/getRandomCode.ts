import LANGUAGES_NAMES from "lib/constants/languages";
import javaScriptCodes from "./javaScriptCodes";
import typeScriptCodes from "./typeScriptCodes";

const getRandomCode = (language: string) => {
  let index;

  switch (language) {
    case LANGUAGES_NAMES.JAVASCRIPT:
      index = Math.floor(Math.random() * (javaScriptCodes.length - 0 + 1)) + 0;
      return javaScriptCodes[index];

    case LANGUAGES_NAMES.TYPESCRIPT:
      index = Math.floor(Math.random() * (typeScriptCodes.length - 0 + 1)) + 0;
      return javaScriptCodes[index];
  }
};

export default getRandomCode;
