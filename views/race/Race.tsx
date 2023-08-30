import React, { useState, useEffect } from "react";
import { Container, Text, Flex, Box, Progress } from "@mantine/core";
import { useDisclosure, useInterval } from "@mantine/hooks";
import { successToast } from "lib/utils/notifications";
import { useRouter } from "next/router";
import { RaceCard } from "./components";

type Props = {};

export default function Race({}: Props) {
  const router = useRouter();
  const { language } = router.query;
  const [active, handlers] = useDisclosure(true);

  const [inputValue, setInputValue] = useState<string>("");
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s: number) => s + 1), 1000);

  const code = `import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n}`;

  const handleManageTimer = () => {
    if (active && inputValue.length) {
      interval.start();
    } else if (!active) {
      interval.stop();
    }
  };

  const handleHasFinishedTheRace = () => {
    if (inputValue.length === code.length) {
      interval.stop();
      successToast("¡Completada!");
    }
  };

  useEffect(() => {
    handleManageTimer();
    handleHasFinishedTheRace();
  }, [active, inputValue]);

  return (
    <Container size="xl">
      <Flex justify="space-between" align="center" pt="2.5rem" pb="1rem">
        <Text color="text-primary.0" fw={500} fz={20}>
          Escribe el siguiente código de {language ?? ""}
        </Text>
        <Text fw={500} fz={20} color="text-primary.0">
          {seconds ?? ""} segundos
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center" gap="2rem">
        <Progress
          w="100%"
          color="orange"
          value={(inputValue.length * 100) / code.length}
        />
        <Box>
          <RaceCard
            code={code}
            active={active}
            handlers={handlers}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          {!active ? (
            <Text align="center" mt="xl" fw={500} color="text-primary.0">
              ¡Haz click en el código para escribir!
            </Text>
          ) : null}
        </Box>
      </Flex>
    </Container>
  );
}
