import React from "react";
import { Card, Flex, Text, createStyles } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { motion } from "framer-motion";

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
    "&:hover > languageCardImage": {
      width: "100rem",
    },
  },
  languageCardImage: {},
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
      w="45%"
      ref={ref}
      radius="md"
      bg="background-secondary.0"
      className={classes.languageCard}
    >
      <Flex align="center" justify="center">
        <motion.img
          className={classes.languageCardImage}
          src={language.image}
          alt="javascript logo"
          width={50}
          height={50}
          animate={hovered ? "cardHovered" : "cardNoHovered"}
          variants={imageAnimations}
        />
        <motion.div
          animate={hovered ? "cardHovered" : "cardNoHovered"}
          variants={textAnimations}
        >
          <Text color="text-primary.0" fw={600} fz={30} ml="sm">
            {language.name}
          </Text>
        </motion.div>
      </Flex>
    </Card>
  );
}
