import React, { useState, useEffect } from "react";
import { Card, Text } from "@mantine/core";

type Props = {
  milliSeconds: number;
  inputValue: string;
};

export default function CPM({ milliSeconds, inputValue }: Props) {
  const [cpm, setCpm] = useState("0");

  useEffect(() => {
    if (milliSeconds > 0 && inputValue.length > 0) {
      // Calcular CPM usando la fórmula CPM = (caracteres / tiempo) * 60000
      const charactersTyped = inputValue.length;
      const timeInMinutes = milliSeconds / 60000; // Convertir milisegundos a minutos
      const calculatedCpm = (charactersTyped / timeInMinutes).toFixed(0);
      setCpm(calculatedCpm);
    } else {
      setCpm("0");
    }
  }, [milliSeconds, inputValue]);

  return (
    <Card w="100%" h="100%" px="lg" radius="lg" bg="background-secondary.0">
      <Text color="text-primary.0" weight={500} fz={20}>
        CPM
      </Text>
      <Text color="text-primary.0" weight={500} fz={20}>
        {/* {Number(cpm).toFixed()} */}
        {cpm}
      </Text>
    </Card>
  );
}
