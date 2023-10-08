import React, { useState, useEffect, useRef } from "react";
import { successToast, LANGUAGES_NAMES, useMillisecondCounter } from "lib";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import { Container, Text, Flex, Grid, Box } from "@mantine/core";
import { RaceCard, ProgressCard, TimeCard, CPM } from "./components";
import { getRandomCodeByLanguageService } from "services/codes";
import { Loader } from "components";

type Props = {};

export default function Race({}: Props) {
  const router = useRouter();
  const { language } = router.query;
  const [active, handlers] = useDisclosure(true);
  const hasFetchedCode = useRef(false);
  const { milliseconds, startCounter, stopCounter } = useMillisecondCounter();

  const [code, setCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const handleGetCode = async () => {
    setIsLoading(true);
    try {
      const response = await getRandomCodeByLanguageService(language);
      setCode(response.text);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleManageTimer();
    handleHasFinishedTheRace();
  }, [active, inputValue]);

  useEffect(() => {
    if (!hasFetchedCode.current) {
      handleGetCode();
      hasFetchedCode.current = true;
    }
  }, []);

  return (
    <Container size="xl">
      <Flex justify="flex-start" align="center" pt="2.5rem" pb="1rem">
        <Text color="text-primary.0" fw={500} fz={20}>
          Escribe el siguiente código
        </Text>
      </Flex>
      {!code || isLoading ? (
        <Flex justify="center" align="center" pt="10rem">
          <Loader />
        </Flex>
      ) : (
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
      )}
    </Container>
  );
}
