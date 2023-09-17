import {
  pythonCodes,
  javaScriptCodes,
  typeScriptCodes,
  LANGUAGES_NAMES,
} from "lib";

const getRandomCode = (language: string) => {
  switch (language) {
    case LANGUAGES_NAMES.JAVASCRIPT:
      return javaScriptCodes[
        Math.floor(Math.random() * javaScriptCodes.length)
      ];
    case LANGUAGES_NAMES.TYPESCRIPT:
      return typeScriptCodes[
        Math.floor(Math.random() * typeScriptCodes.length)
      ];
    case LANGUAGES_NAMES.PYTHON:
      return pythonCodes[Math.floor(Math.random() * pythonCodes.length)];
  }
};

export default getRandomCode;
