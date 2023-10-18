import React, { useState, useEffect, useRef } from "react";
import { successToast, useMillisecondCounter } from "lib";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import { Container, Flex } from "@mantine/core";
import { getRandomCodeByLanguageService } from "services/codes";
import { useUserData } from "hooks";
import { postRaceService } from "services";
import { handleRenderComponentBody } from "./Utils";

type Props = {};

export default function Race({ type }: any) {
  const router = useRouter();
  const userData = useUserData();
  const { language } = router.query;
  const hasFetchedCode = useRef(false);
  const [active, handlers] = useDisclosure(true);
  const { milliseconds, startCounter, stopCounter } = useMillisecondCounter();

  const [cpm, setCpm] = useState("0");
  const [code, setCode] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [raceCompleted, setRaceCompleted] = useState<any>(null);

  const handleManageTimer = () => {
    if (inputValue?.length) {
      startCounter();
    }
  };

  const handleHasFinishedTheRace = () => {
    if (inputValue?.length === code?.text?.length) {
      if (type === "race") {
        stopCounter();
        successToast("¡Completado!");
        handlePostRace();
      } else if (type === "practice") {
        stopCounter();
        successToast("¡Completado!");

        const race = {
          cpm: cpm,
          code: {
            text: code?.text,
          },
          user: userData?._id,
          timeInMs: milliseconds,
          language: {
            name: code?.language.name,
          },
        };

        setRaceCompleted(race);
      }
    }
  };

  const handleGetCode = async () => {
    setIsLoading(true);
    try {
      const response = await getRandomCodeByLanguageService(language);
      setCode(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handlePostRace = async () => {
    setIsLoading(true);
    try {
      const data = {
        cpm: cpm,
        code: code._id,
        user: userData._id,
        timeInMs: milliseconds,
        language: code.language._id,
      };

      const response = await postRaceService(data);

      setRaceCompleted(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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
        {/* <Text color="text-primary.0" fw={500} fz={20}>
          {raceCompleted
            ? "¡Carrera terminada!"
            : "Escribe el siguiente código"}
        </Text> */}
      </Flex>
      {handleRenderComponentBody({
        cpm,
        code,
        setCpm,
        active,
        handlers,
        isLoading,
        inputValue,
        milliseconds,
        setInputValue,
        raceCompleted,
      })}
    </Container>
  );
}
