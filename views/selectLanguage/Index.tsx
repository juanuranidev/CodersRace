import React from "react";
import Head from "next/head";
import JavaScript from "assets/icons/JavaScript.svg";
import TypeScript from "assets/icons/TypeScript.svg";
import { LanguageCard } from "./components";
import { Container, Text, Flex } from "@mantine/core";

type Props = {};

export default function SelectLanguage(props: Props) {
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

  return (
    <React.Fragment>
      <Head>
        <title>Coders Race</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </React.Fragment>
  );
}