import React, { useState } from "react";
import { Card, Progress, Textarea, FocusTrap } from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import { renderCodeCharacter } from "lib";

type Props = {
  code: string;
  active: boolean;
  handlers: any;
  inputValue: string;
  setInputValue: any;
};

export default function RaceCard({
  code,
  active,
  handlers,
  inputValue,
  setInputValue,
}: Props) {
  const ref = useClickOutside(() => handlers.close());

  const handleChangeInput = (e: any) => {
    const input = e.target.value;
    const inputLength = inputValue.length;
    if (code[inputLength] === input) {
      setInputValue(inputValue + e.target.value);
    }
  };

  return (
    <Card
      px="lg"
      ref={ref}
      radius="lg"
      bg="background-secondary.0"
      onClick={() => handlers.open()}
      style={{ border: active ? "2px solid #fc5d1b" : "2px solid #ff0000" }}
    >
      <pre style={{ fontFamily: "Poppins, sans-serif" }}>
        {renderCodeCharacter(code, inputValue)}
      </pre>
      <FocusTrap active={active}>
        <Textarea
          style={{
            height: "100%",
            background: "none",
            position: "absolute",
          }}
          top="0"
          left="0"
          w="100%"
          value=""
          id="test"
          minRows={12}
          variant="unstyled"
          onChange={(e) => handleChangeInput(e)}
        />
      </FocusTrap>
    </Card>
  );
}
