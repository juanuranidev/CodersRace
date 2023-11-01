import React from "react";
import { formatMillisecondsToSeconds, renderLanguageIcon } from "lib";
import { Text, Flex, Grid, Box, Card, Group, Button } from "@mantine/core";
import { CPM, ProgressCard, RaceCard, TimeCard } from "./components";
import { Loader } from "components";
import Link from "next/link";

export const handleRenderComponentBody = ({
  cpm,
  code,
  active,
  setCpm,
  handlers,
  isLoading,
  inputValue,
  milliseconds,
  setInputValue,
  raceCompleted,
}: any) => {
  console.log(raceCompleted);
  if (!code?.text || isLoading) {
    return (
      <Flex justify="center" align="center" pt="10rem">
        <Loader />
      </Flex>
    );
  } else if (raceCompleted) {
    return (
      <Box>
        <Flex justify="space-between" align="center" mb="md">
          <Text fw={700} fz={40}>
            ¡Felicidades!
          </Text>
          <Link href="/play">
            <Button variant="primary">Volver</Button>
          </Link>
        </Flex>
        <Card px="lg" radius="lg" bg="background-secondary.0">
          <Group>
            <Text fw={600} fz={18}>
              CPM:
            </Text>
            <Text fw={500} fz={15}>
              {raceCompleted?.cpm}
            </Text>
          </Group>
          <Group>
            <Text fw={600} fz={18}>
              Segundos:
            </Text>
            <Text fw={500} fz={15}>
              {formatMillisecondsToSeconds(raceCompleted?.timeInMs)}s
            </Text>
          </Group>
          <Group>
            <Text fw={600} fz={18}>
              Lenguage:
            </Text>
            <Text fw={500} fz={15}>
              {raceCompleted?.language?.name}{" "}
              {renderLanguageIcon(raceCompleted?.language?.name, 20, 20)}
            </Text>
          </Group>
          <Group>
            <Text fw={600} fz={18}>
              Código:
            </Text>
            <Text fw={500} fz={15}>
              {raceCompleted?.code?.text}
            </Text>
          </Group>
        </Card>
      </Box>
    );
  } else {
    return (
      <React.Fragment>
        <Grid grow gutter="xl" mb="xs">
          <Grid.Col span={8}>
            <ProgressCard
              code={code?.text}
              active={active}
              handlers={handlers}
              inputValue={inputValue}
              milliseconds={milliseconds}
              setInputValue={setInputValue}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <TimeCard milliseconds={milliseconds} />
          </Grid.Col>
          <Grid.Col span={2}>
            <CPM
              milliseconds={milliseconds}
              inputValue={inputValue}
              cpm={cpm}
              setCpm={setCpm}
            />
          </Grid.Col>
        </Grid>
        <Box w="100%" h="100%">
          <RaceCard
            code={code?.text}
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
    );
  }
};
