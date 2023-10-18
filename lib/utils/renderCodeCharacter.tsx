import { Kbd } from "@mantine/core";

const renderCodeCharacter = (code: string, input: string): any => {
  return code.split("").map((character: string, index: number) => {
    const isSpace = character === "\n";
    const inputLength = input?.length - 1;
    const hasCompleted = input?.length > index;
    const expectedCharacter = inputLength === index - 1;

    if (expectedCharacter && !isSpace) {
      return (
        <span
          key={index}
          style={{
            opacity: "1",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: "2rem",
            backgroundColor: "#fc5d1b",
          }}
        >
          {character}
        </span>
      );
    } else if (expectedCharacter && isSpace) {
      return (
        <span
          key={index}
          style={{
            opacity: "1",
            fontWeight: 500,
            fontSize: "0.8rem",
            // backgroundColor: "#fc5d1b",
          }}
        >
          <Kbd
            p="0"
            size="sm"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
          >
            {"↵ \n"}
          </Kbd>
        </span>
      );
    } else if (isSpace && !hasCompleted) {
      return (
        <span key={index} style={{ opacity: "0.5" }}>
          <Kbd
            size="sm"
            p="0"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
          >
            {"↵ \n"}
          </Kbd>
        </span>
      );
    } else if (isSpace && hasCompleted) {
      return (
        <span key={index}>
          <Kbd
            size="sm"
            p="0"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
          >
            {"↵ \n"}
          </Kbd>
        </span>
      );
    } else if (hasCompleted) {
      return (
        <span
          key={index}
          style={{
            opacity: "1",
            color: "#ffffff",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: "2rem",
          }}
        >
          {character}
        </span>
      );
    }
    return (
      <span
        key={index}
        style={{
          fontSize: "1.25rem",
          lineHeight: "2rem",
          fontWeight: 500,
          opacity: "0.5",
          color: "#ffffff",
        }}
      >
        {character}
      </span>
    );
  });
};

export default renderCodeCharacter;
