import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Title, Button, Container } from "@mantine/core";
import { landingCodes } from "lib";
import { RenderCode } from "components";
import { Code } from "./components";

const landingCode = `import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n}`;

export default function Landing() {
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
      <Box>
        {landingCodes.map((code: any) => (
          <Code key={code.text} code={code} />
        ))}
      </Box>
      <Container
        size="xl"
        w="100%"
        px="xl"
        pos="fixed"
        style={{
          top: "50%",
          left: "50%",
          position: "fixed",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Flex justify="space-between" align="center" h="100%">
          <Box w="50%">
            <Title size="h1" fz="4rem" color="brand-primary.0">
              Coders Race
            </Title>
            <Text size="md" fz="1rem" color="text-primary.0" fw={500}>
              ¿Qué tan rápido puedes codear?
            </Text>
            <Button variant="primary" mt="md">
              Comenzar
            </Button>
          </Box>
          <Box w="50%">
            <RenderCode code={landingCode} input={inputValue} />
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}

{
  /* <Flex justify="center" w="50%" >
<Textarea
  style={{
    position: "absolute",
    background: "none",
    // fontSize: "100rem",
  }}
  value=""
  onChange={(e) => handleChangeInput(e)}
  w="20rem"
  id="text"
  variant="unstyled"
/>

<pre style={{ fontFamily: "Poppins, sans-serif" }}>
  <span>{handleRenderCode(codeTest, inputValue)}</span>
</pre>
</Flex> */
}
// const useStyles = createStyles(() => ({
//   tab: {
//     fontWeight: 600,
//     color: "#c5c5c6 !important",
//     padding: "0.8rem",
//     "&:hover": {
//       borderTopLeftRadius: "1rem",
//       borderTopRightRadius: "1rem",
//       backgroundColor: "#2a2930",
//     },
//   },
// }));
// // const { classes } = useStyles();
{
  /* <Tabs
      bg="#2a2930"
      color="orange"
      defaultValue="first"
      style={{
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
      }}
      value={"first"}
    >
      <Tabs.List grow>
        <Tabs.Tab value="first" className={classes.tab}>
          JavaScript
        </Tabs.Tab>
        <Tabs.Tab value="second" className={classes.tab}>
          TypeScript
        </Tabs.Tab>
        <Tabs.Tab value="third" className={classes.tab}>
          Phyton
        </Tabs.Tab>
      </Tabs.List>
    </Tabs> */
}
// const handleChangeInput = (e: any) => {
//   const input = e.target.value;
//   const inputLength = inputValue.length;
//   if (codeTest[inputLength] === input) {
//     setInputValue(inputValue + e.target.value);
//   }
// };
