import React, { useEffect } from "react";
import { Card, Flex, Text, Tooltip } from "@mantine/core";
import InfoIcon from "assets/icons/Info.svg";
import Image from "next/image";

type Props = {
  milliseconds: number;
  inputValue: string;
};

export default function CPM({ milliseconds, inputValue, cpm, setCpm }: any) {
  useEffect(() => {
    if (milliseconds > 0 && inputValue.length > 0) {
      // Calcular CPM usando la fórmula CPM = (caracteres / tiempo) * 60000
      const charactersTyped = inputValue.length;
      const timeInMinutes = milliseconds / 60000; // Convertir milisegundos a minutos
      const calculatedCpm = (charactersTyped / timeInMinutes).toFixed(0);
      setCpm(calculatedCpm);
    } else {
      setCpm("0");
    }
  }, [milliseconds, inputValue]);

  return (
    <Card
      w="100%"
      h="100%"
      px="lg"
      radius="lg"
      bg="background-secondary.0"
      style={{
        overflow: "visible",
        zIndex: "auto",
      }}
    >
      <Flex align="center" gap="xs">
        <Text color="text-primary.0" weight={500} fz={20}>
          CPM
        </Text>
        <Tooltip
          withArrow
          label="Caracteres por minuto (CPM) se calculan de la siguiente forma: palabras correctas / tiempo en minutos"
        >
          <Image src={InfoIcon.src} width={25} height={25} alt="info icon" />
        </Tooltip>
      </Flex>
      <Text color="text-primary.0" weight={500} fz={20}>
        {cpm}
      </Text>
    </Card>
  );
}
