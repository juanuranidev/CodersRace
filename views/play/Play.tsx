import React from "react";
import { Container, Text, SimpleGrid } from "@mantine/core";
import { GamemodeCard } from "./components";
import { gamemodes } from "./Utils";

type Props = {};

export default function Play({}: Props) {
  return (
    <Container size="xl">
      <Text py="2.5rem" color="text-primary.0" fw={500} fz={20}>
        Elige tu modo de juego
      </Text>
      <SimpleGrid
        cols={1}
        spacing="xl"
        verticalSpacing="xl"
        breakpoints={[{ minWidth: "md", cols: 2 }]}
      >
        {gamemodes.map((gamemode: any) => (
          <GamemodeCard gamemode={gamemode} key={gamemode.name} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
