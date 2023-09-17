import React from "react";
import JavaScript from "assets/icons/JavaScript.svg";
import TypeScript from "assets/icons/TypeScript.svg";
import Python from "assets/icons/Python.svg";
import { LanguageCard } from "./components";
import { Container, Text, Flex, Box, SimpleGrid } from "@mantine/core";

const languages = [
  {
    name: "JavaScript",
    image: JavaScript.src,
    link: "/race/javascript",
  },
  {
    name: "TypeScript",
    image: TypeScript.src,
    link: "/race/typescript",
  },
  {
    name: "Python",
    image: Python.src,
    link: "/race/python",
  },
];

export default function SelectLanguage() {
  return (
    <Container size="xl">
      <Text py="2.5rem" color="text-primary.0" fw={500} fz={20}>
        Elige tu lenguage
      </Text>
      <SimpleGrid
        cols={1}
        spacing="xl"
        verticalSpacing="xl"
        breakpoints={[{ minWidth: "md", cols: 2 }]}
      >
        {languages.map((language) => (
          <LanguageCard language={language} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
