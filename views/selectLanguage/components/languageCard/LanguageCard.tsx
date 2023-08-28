import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHover } from "@mantine/hooks";
import { Card, Flex, Text, createStyles, Code } from "@mantine/core";

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

const imageAnimations = {
  cardHovered: {
    x: "1000%",
    scale: [1, 1.25],
    rotate: [0, 90, 180, 360],
    transition: { duration: 0.25 },
  },
  cardNoHovered: { x: 0 },
};

const textAnimations = {
  cardHovered: {
    x: "-20%",
    opacity: [0, 0, 1],
    scale: [1, 1, 1.25],
    transition: { duration: 0.25 },
  },
  cardNoHovered: { opacity: 1 },
};

export default function LanguageCard({ language }: Props) {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  return (
    <Card
      p="xl"
      py="3rem"
      w="50%"
      ref={ref}
      radius="md"
      bg="background-secondary.0"
      className={classes.languageCard}
    >
      <Link href={language?.link} style={{ textDecoration: "none" }}>
        <Flex align="center" justify="center">
          <motion.img
            width={50}
            height={50}
            src={language.image}
            alt="javascript logo"
            variants={imageAnimations}
            animate={hovered ? "cardHovered" : "cardNoHovered"}
          />
          <motion.div
            variants={textAnimations}
            animate={hovered ? "cardHovered" : "cardNoHovered"}
          >
            <Text color="text-primary.0" fw={600} fz={30} ml="sm">
              {language.name}
            </Text>
          </motion.div>
        </Flex>
      </Link>
    </Card>
  );
}
