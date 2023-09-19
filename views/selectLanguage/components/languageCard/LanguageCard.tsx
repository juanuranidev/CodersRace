import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHover } from "@mantine/hooks";
import { Card, Flex, Text, createStyles } from "@mantine/core";

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

  return (
    <motion.div
      variants={cardAnimations}
      animate={hovered ? "cardHovered" : ""}
    >
      <Link href={language?.link} style={{ textDecoration: "none" }}>
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
              src={language.image}
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
