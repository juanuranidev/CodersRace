import React from "react";
import { Card, Flex, Text, createStyles, Tooltip, Image } from "@mantine/core";
import { cardAnimations, imageAnimations } from "views/play/Utils";
import { useUserData } from "lib";
import { useHover } from "@mantine/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import GamemodeCar1 from "assets/images/GamemodeCar1.jpg";
import GamemodeCar2 from "assets/images/GamemodeCar2.jpg";
import GamemodeCar3 from "assets/images/GamemodeCar3.jpg";

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
      opacity: handleIsGamemodeDisabled(gamemode, userData) ? "0.2" : "1",
      cursor: handleIsGamemodeDisabled(gamemode, userData)
        ? "no-drop"
        : "pointer",
      "&:hover": {
        backgroundColor: "#26252b",
      },
    },
  };
});

export default function GamemodeCard({ gamemode, index }: any) {
  const userData = useUserData();
  const { hovered, ref } = useHover();
  const { classes } = useStyles({ gamemode, userData });

  const gamemodeImages = [GamemodeCar1.src, GamemodeCar2.src, GamemodeCar3.src];

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
            p="0"
            pb="md"
            w="100%"
            ref={ref}
            radius="md"
            bg="background-secondary.0"
            className={`card-container ${classes.languageCard}`}
          >
            <Image
              width="100%"
              height={250}
              alt="car image"
              className="gradient-mask-image"
              src={gamemodeImages[index]}
            />
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
              p="0"
              pb="lg"
              w="100%"
              ref={ref}
              radius="md"
              bg="background-secondary.0"
              className={`card-container ${classes.languageCard}`}
            >
              <Image
                width="100%"
                height={250}
                alt="car image"
                className="gradient-mask-image"
                src={gamemodeImages[index]}
              />
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
