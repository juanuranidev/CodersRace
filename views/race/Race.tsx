import React, { useState, useEffect } from "react";
import {
  successToast,
  getRandomCode,
  LANGUAGES_NAMES,
  formatMillisecondsToSeconds,
} from "lib";
import { RaceCard } from "./components";
import { useRouter } from "next/router";
import { useDisclosure, useInterval } from "@mantine/hooks";
import { Container, Text, Flex, Progress, Group } from "@mantine/core";

type Props = {};

export default function Race({}: Props) {
  const router = useRouter();
  const { language } = router.query;
  const [active, handlers] = useDisclosure(true);

  const [code, setCode] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [milliSeconds, setMilliSeconds] = useState(0);

  const interval = useInterval(
    () => setMilliSeconds((s: number) => s + 10),
    10
  );

  const handleManageTimer = () => {
    if (inputValue.length) {
      interval.start();
    }
  };

  const handleHasFinishedTheRace = () => {
    if (inputValue.length === code?.length) {
      interval.stop();
      successToast("¡Completado!");
    }
  };

  const handleSetCode = () => {
    if (language === LANGUAGES_NAMES.JAVASCRIPT.toLowerCase()) {
      setCode(getRandomCode(LANGUAGES_NAMES.JAVASCRIPT)!);
    } else if (language === LANGUAGES_NAMES.TYPESCRIPT.toLowerCase()) {
      setCode(getRandomCode(LANGUAGES_NAMES.TYPESCRIPT)!);
    } else if (language === LANGUAGES_NAMES.PYTHON.toLowerCase()) {
      setCode(getRandomCode(LANGUAGES_NAMES.PYTHON)!);
    }
  };

  useEffect(() => {
    handleManageTimer();
    handleHasFinishedTheRace();
  }, [active, inputValue]);

  useEffect(() => {
    handleSetCode();
  }, []);

  return (
    <Container size="xl">
      <Flex justify="space-between" align="center" pt="2.5rem" pb="1rem">
        <Text color="text-primary.0" fw={500} fz={20}>
          Escribe el siguiente código
        </Text>
        <Group align="center">
          <Text
            fw={500}
            fz={20}
            w="4rem"
            display="flex"
            color="text-primary.0"
            style={{ justifyContent: "flex-end" }}
          >
            {milliSeconds ? formatMillisecondsToSeconds(milliSeconds) : "0"}
          </Text>
          <Text fw={500} fz={20} color="text-primary.0">
            segundos
          </Text>
        </Group>
      </Flex>
      <Flex>
        <Progress
          w="100%"
          color="orange"
          value={(inputValue.length * 100) / code?.length!}
        />
      </Flex>
      {code?.length! > 0 ? (
        <Flex direction="column" align="center" pt="2.5rem" pb="1rem">
          <RaceCard
            code={code!}
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
        </Flex>
      ) : null}
    </Container>
  );
}
