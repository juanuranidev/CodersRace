import React from "react";
import JavaScript from "assets/icons/JavaScript.svg";
import TypeScript from "assets/icons/TypeScript.svg";
import { LanguageCard } from "./components";
import { Container, Text, Flex } from "@mantine/core";

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
];

export default function SelectLanguage() {
  return (
    <Container size="xl">
      <Text py="2.5rem" color="text-primary.0" fw={500} fz={20}>
        Elige tu lenguage
      </Text>
      <Flex justify="space-between" gap="xl">
        {languages.map((language) => (
          <LanguageCard language={language} />
        ))}
      </Flex>
    </Container>
  );
}
