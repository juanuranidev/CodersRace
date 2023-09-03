import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@mantine/hooks";
import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles({
  text: {
    fontWeight: 600,
    cursor: "default",
    opacity: "0.1 !important",
  },
});

export default function Code({ code }: any) {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  const textAnimations = {
    codeHovered: { opacity: 1, scale: 1.01 },
    codeNoHovered: { opacity: 0.5, scale: 1 },
  };

  return (
    <motion.div
      key={code?.text}
      variants={textAnimations}
      animate={hovered ? "codeHovered" : "codeNoHovered"}
      style={{
        display: "flex",
        justifyContent: code?.justify,
      }}
    >
      <Text className={classes.text} ref={ref} color="text-primary.0">
        {code?.text}
      </Text>
    </motion.div>
  );
}
