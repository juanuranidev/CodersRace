import React, { useState, useEffect } from "react";
import {
  successToast,
  getRandomCode,
  LANGUAGES_NAMES,
  useMillisecondCounter,
} from "lib";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import { Container, Text, Flex, Grid, Box } from "@mantine/core";
import { RaceCard, ProgressCard, TimeCard, CPM } from "./components";

type Props = {};

export default function Race({}: Props) {
  const router = useRouter();
  const { language } = router.query;
  const [active, handlers] = useDisclosure(true);
  const { milliseconds, startCounter, stopCounter } = useMillisecondCounter();

  const [code, setCode] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleManageTimer = () => {
    if (inputValue.length) {
      startCounter();
    }
  };

  const handleHasFinishedTheRace = () => {
    if (inputValue.length === code?.length) {
      stopCounter();
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
      <Flex justify="flex-start" align="center" pt="2.5rem" pb="1rem">
        <Text color="text-primary.0" fw={500} fz={20}>
          Escribe el siguiente código
        </Text>
      </Flex>
      {code?.length! > 0 ? (
        <React.Fragment>
          <Grid grow gutter="xl" mb="xs">
            <Grid.Col span={8}>
              <ProgressCard
                milliseconds={milliseconds}
                code={code!}
                active={active}
                handlers={handlers}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <TimeCard milliseconds={milliseconds} />
            </Grid.Col>
            <Grid.Col span={2}>
              <CPM milliseconds={milliseconds} inputValue={inputValue} />
            </Grid.Col>
          </Grid>
          <Box w="100%" h="100%">
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
          </Box>
        </React.Fragment>
      ) : null}
    </Container>
  );
}
