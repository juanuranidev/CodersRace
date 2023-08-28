import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@mantine/hooks";
import { Box, createStyles, Text } from "@mantine/core";

const useStyles = createStyles({
  text: {
    cursor: "default",
  },
});

export default function Code({ code }: any) {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  const textAnimations = {
    codeHovered: { opacity: 1 },
    codeNoHovered: { opacity: 0.1 },
  };

  return (
    <Box>
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
    </Box>
  );
}
