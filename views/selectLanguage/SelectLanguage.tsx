import React, { useEffect, useState } from "react";
import { Container, Text, SimpleGrid, Flex } from "@mantine/core";
import { getLanguagesService } from "services";
import { LanguageCard } from "./components";
import { Loader } from "components";

export default function SelectLanguage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [languages, setLanguages] = useState<any[]>([]);

  const handleGetLanguages = async () => {
    try {
      const response = await getLanguagesService();

      setLanguages(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetLanguages();
  }, []);

  if (isLoading)
    return (
      <Flex align="center" justify="center" mih="90%">
        <Loader />
      </Flex>
    );

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
        {languages.map((language: any) => (
          <LanguageCard language={language} key={language?.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
