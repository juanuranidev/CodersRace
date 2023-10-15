import React from "react";
import { Card, Flex, Text, createStyles, Tooltip } from "@mantine/core";
import { useUserData } from "hooks";
import { useHover } from "@mantine/hooks";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const handleIsGamemodeDisabled = (gamemode: any, userData: any): boolean => {
  if (gamemode?.isDisabled) return true;
  if (gamemode?.requiresUser && !userData) return true;

  return false;
};

const useStyles = createStyles((theme, params: any) => {
  const gamemode = params.gamemode;
  const userData = params.userData;

  return {
    languageCard: {
      userSelect: "none",
      opacity: handleIsGamemodeDisabled(gamemode, userData) ? "0.4" : "1",
      cursor: handleIsGamemodeDisabled(gamemode, userData)
        ? "no-drop"
        : "pointer",
      "&:hover": {
        backgroundColor: "#26252b",
      },
    },
  };
});

export default function GamemodeCard({ gamemode }: any) {
  const userData = useUserData();
  const { hovered, ref } = useHover();
  const { classes } = useStyles({ gamemode, userData });

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
    <Tooltip
      w={300}
      multiline
      withArrow
      label={gamemode?.tooltipText}
      transitionProps={{ duration: 200 }}
    >
      <motion.div
        variants={cardAnimations}
        animate={
          handleIsGamemodeDisabled(gamemode, userData) ? "cardHovered" : ""
        }
      >
        {handleIsGamemodeDisabled(gamemode, userData) ? (
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
                src={gamemode?.icon}
                alt="javascript logo"
              />

              <Text color="text-primary.0" fw={600} fz={30} ml="sm">
                {gamemode?.name}
              </Text>
            </Flex>
          </Card>
        ) : (
          <Link href={gamemode?.url} style={{ textDecoration: "none" }}>
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
                  src={gamemode?.icon}
                  alt="javascript logo"
                  variants={imageAnimations}
                  animate={hovered ? "cardHovered" : ""}
                />

                <Text color="text-primary.0" fw={600} fz={30} ml="sm">
                  {gamemode?.name}
                </Text>
              </Flex>
            </Card>
          </Link>
        )}
      </motion.div>
    </Tooltip>
  );
}
