import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@mantine/hooks";

export default function Code({ code }: any) {
  const { hovered, ref } = useHover();

  const textAnimations = {
    codeHovered: { opacity: 1, scale: 1.01 },
    codeNoHovered: { opacity: 0.8, scale: 1 },
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
      <p
        ref={ref}
        style={{ opacity: "0.1" }}
        className="font-semibold cursor-default select-none"
      >
        {code?.text}
      </p>
    </motion.div>
  );
}
