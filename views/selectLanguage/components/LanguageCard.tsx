import React from "react";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useHover } from "@mantine/hooks";
import { LanguageType } from "lib/types";
import { LANGUAGES_NAMES } from "lib/constants";
import JavaScript from "assets/icons/JavaScript.svg";
import TypeScript from "assets/icons/TypeScript.svg";
import Python from "assets/icons/Python.svg";
import Link from "next/link";

type Props = {
  language: LanguageType;
  baseUrl: string;
};

export default function LanguageCard({ language, baseUrl }: Props) {
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

  const handleRenderIcon = (language: string) => {
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
      animate={hovered && handleRenderIcon(language?.name) ? "cardHovered" : ""}
    >
      <Link
        href={`${baseUrl}/${language?.name.toLowerCase()}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          ref={ref}
          radius="md"
          isPressable
          className="bg-backgroundSecondary p-10 w-full hover:bg-[#26252b]"
        >
          <div className="flex flex-row justify-center items-center gap-5 w-full">
            <motion.img
              width={50}
              height={50}
              alt="javascript logo"
              variants={imageAnimations}
              src={handleRenderIcon(language?.name)}
              animate={hovered ? "cardHovered" : ""}
            />

            <p className="font-semibold text-3xl text-secondary">
              {language.name}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
