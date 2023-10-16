import { LANGUAGES_NAMES } from "lib/constants";
import JavaScript from "assets/icons/JavaScript.svg";
import TypeScript from "assets/icons/TypeScript.svg";
import Python from "assets/icons/Python.svg";
import Image from "next/image";

const renderLanguageIcon = (
  language: string,
  width: number,
  height: number
): any => {
  let icon = "";

  if (language === LANGUAGES_NAMES.JAVASCRIPT) {
    icon = JavaScript.src;
  } else if (language === LANGUAGES_NAMES.TYPESCRIPT) {
    icon = TypeScript.src;
  } else if (language === LANGUAGES_NAMES.PYTHON) {
    icon = Python.src;
  }

  return <Image width={width} height={height} alt={icon} src={icon} />;
};

export default renderLanguageIcon;
