import LANGUAGES_NAMES from "lib/constants/languages";
import javaScriptCodes from "./javaScriptCodes";
import typeScriptCodes from "./typeScriptCodes";

const getRandomCode = (language: string) => {
  let index;
  switch (language) {
    case LANGUAGES_NAMES.JAVASCRIPT:
      return javaScriptCodes[
        Math.floor(Math.random() * javaScriptCodes.length)
      ];

    case LANGUAGES_NAMES.TYPESCRIPT:
      return typeScriptCodes[
        Math.floor(Math.random() * typeScriptCodes.length)
      ];
  }
};

export default getRandomCode;
