import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Title,
  Button,
  Container,
  createStyles,
} from "@mantine/core";
import { landingCodes } from "lib";
import { Flex, RenderCode } from "components";
import { Code } from "./components";
import Link from "next/link";

const useStyles = createStyles({
  floatingHeader: {
    top: "50%",
    left: "50%",
    width: "100%",
    position: "fixed",
    transform: "translate(-50%, -50%)",
  },
});

export default function Landing() {
  const { classes } = useStyles();
  const landingCode = `import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n},`;

  const [inputValue, setInputValue] = useState<string>("");

  const handleCompleteInput = (code: string) => {
    const nextInputIndex = inputValue.length;
    const nextInputCharacter = code[nextInputIndex];

    setInputValue(inputValue + nextInputCharacter);

    if (nextInputIndex === code.length) {
      setInputValue("");
    }
  };

  useEffect(() => {
    setTimeout(() => handleCompleteInput(landingCode), 1000);
  }, [inputValue]);

  return (
    <Container bg="background-primary.0" size="full">
      <Box style={{ height: "85vh", overflow: "hidden" }}>
        {landingCodes.map((code: any) => (
          <Code key={code.text} code={code} />
        ))}
      </Box>
      <Container px="xl" size="xl" className={classes.floatingHeader}>
        <Flex justifyContent="space-between" alignItems="center" heigh="100%">
          <Box w="50%">
            <Title size="h1" fz="4rem" color="brand-primary.0">
              Coders Race
            </Title>
            <Text size="md" fz="1rem" color="text-primary.0" fw={500}>
              ¿Qué tan rápido puedes codear?
            </Text>
            <Link href="/play">
              <Button variant="primary" mt="md">
                Comenzar
              </Button>
            </Link>
          </Box>
          <Box w="50%">
            <RenderCode code={landingCode} input={inputValue} />
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}
