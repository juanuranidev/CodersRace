import React from "react";
import { Card, Text } from "@mantine/core";
import { formatMillisecondsToSeconds } from "lib";

type Props = {
  milliseconds: number;
};

export default function TimeCard({ milliseconds }: Props) {
  return (
    <Card w="100%" h="100%" px="lg" radius="lg" bg="background-secondary.0">
      <Text color="text-primary.0" weight={500} fz={20}>
        Tiempo
      </Text>
      <Text fz={18} fw={500} color="text-primary.0">
        {milliseconds ? formatMillisecondsToSeconds(milliseconds) : "0"}
      </Text>
    </Card>
  );
}
