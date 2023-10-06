import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@mantine/hooks";
import { LANGUAGES_NAMES } from "lib";
import { Card, Flex, Text, createStyles } from "@mantine/core";
import JavaScript from "assets/icons/JavaScript.svg";
import TypeScript from "assets/icons/TypeScript.svg";
import Python from "assets/icons/Python.svg";
import Link from "next/link";

type Props = {
  language: any;
};

const useStyles = createStyles({
  languageCard: {
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#26252b",
    },
  },
});

export default function LanguageCard({ language }: Props) {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  const cardAnimations = {
    cardHovered: {
      scale: [1, 0.95, 1],
      transition: { duration: 0.25 },
    },
  };

  const imageAnimations = {
    cardHovered: {
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 },
    },
  };

  const handleRenderIcon = (language: string): any => {
    switch (language) {
      case LANGUAGES_NAMES.JAVASCRIPT:
        return JavaScript.src;
      case LANGUAGES_NAMES.TYPESCRIPT:
        return TypeScript.src;
      case LANGUAGES_NAMES.PYTHON:
        return Python.src;
    }
  };

  return (
    <motion.div
      variants={cardAnimations}
      animate={hovered ? "cardHovered" : ""}
    >
      <Link
        href={`/race/${language?.name.toLowerCase()}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          p="xl"
          w="100%"
          py="3rem"
          ref={ref}
          radius="md"
          bg="background-secondary.0"
          className={classes.languageCard}
        >
          <Flex align="center" justify="center">
            <motion.img
              width={50}
              height={50}
              src={handleRenderIcon(language?.name)}
              alt="javascript logo"
              variants={imageAnimations}
              animate={hovered ? "cardHovered" : ""}
            />

            <Text color="text-primary.0" fw={600} fz={30} ml="sm">
              {language.name}
            </Text>
          </Flex>
        </Card>
      </Link>
    </motion.div>
  );
}
