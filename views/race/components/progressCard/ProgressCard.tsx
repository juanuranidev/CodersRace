import React from "react";
import { Card, Text, Progress } from "@mantine/core";

type Props = {
  code: string;
  active: boolean;
  handlers: any;
  inputValue: string;
  setInputValue: any;
  milliseconds: number;
};

export default function ProgressCard({
  code,
  inputValue,
  milliseconds,
}: Props) {
  return (
    <Card w="100%" h="100%" px="lg" radius="lg" bg="background-secondary.0">
      <Text color="text-primary.0" weight={500} fz={20} mb="xs">
        Progreso
      </Text>
      <Progress
        w="100%"
        color="orange"
        value={(inputValue?.length * 100) / code?.length!}
      />
    </Card>
  );
}
