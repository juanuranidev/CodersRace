import React from "react";
import { useHover } from "@mantine/hooks";
import { Card, Flex, Text, Box } from "@mantine/core";
import JavaScriptIcon from "assets/icons/JavaScript.svg";
import TypeScriptIcon from "assets/icons/TypeScript.svg";
import PythonIcon from "assets/icons/Python.svg";
import { motion } from "framer-motion";

type Props = {};

export default function ComingSoonCard({}: Props) {
  const { hovered, ref } = useHover();

  const iconAnimation = {
    cardHovered: {
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.15, 1],
      transition: { duration: 0.4 },
    },
    cardNotHovered: {
      rotate: [360, 270, 180, 90, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <Card
      p="xl"
      w="100%"
      py="2rem"
      ref={ref}
      radius="md"
      bg="background-secondary.0"
    >
      <Flex align="center" justify="center" gap="xl">
        <Text color="text-primary.0" fw={600} fz={30}>
          Próximamente
        </Text>
        <motion.img
          width={30}
          height={30}
          alt="javascript"
          src={JavaScriptIcon.src}
          variants={iconAnimation}
          animate={hovered ? "cardHovered" : ""}
        />
        <motion.img
          width={30}
          height={30}
          alt="typescript"
          src={TypeScriptIcon.src}
          variants={iconAnimation}
          animate={hovered ? "cardHovered" : ""}
        />
        <motion.img
          width={30}
          height={30}
          alt="python"
          src={PythonIcon.src}
          variants={iconAnimation}
          animate={hovered ? "cardHovered" : ""}
        />
      </Flex>
    </Card>
  );
}
