import React from "react";
import { Card, CardFooter, Image, Divider } from "@nextui-org/react";
import { cardAnimations } from "views/play/Utils";
import { useUserData } from "lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import GamemodeCar1 from "assets/images/GamemodeCar1.jpg";
import GamemodeCar2 from "assets/images/GamemodeCar2.jpg";
import GamemodeCar3 from "assets/images/GamemodeCar3.jpg";
import { UserType } from "lib/types";

type Props = {
  gamemode: any;
  index: number;
};

export default function GamemodeCard({ gamemode, index }: Props) {
  const userData = useUserData();
  const gamemodeImages = [GamemodeCar1.src, GamemodeCar2.src, GamemodeCar3.src];

  const handleIsGamemodeDisabled = (
    gamemode: any,
    userData: UserType
  ): boolean => {
    if (gamemode?.isDisabled) return true;
    if (gamemode?.requiresUser && !userData) return true;

    return false;
  };

  const cardStyles = `user-select-none ${
    handleIsGamemodeDisabled(gamemode, userData)
      ? "opacity-40 cursor-not-allowed"
      : "opacity-100 cursor-pointer hover:bg-[#26252b]"
  }`;

  return (
    <motion.div
      variants={cardAnimations}
      animate={!handleIsGamemodeDisabled(gamemode, userData) && "cardHovered"}
    >
      {handleIsGamemodeDisabled(gamemode, userData) ? (
        <Card
          isFooterBlurred
          className={`${cardStyles} bg-backgroundSecondary w-full`}
          isPressable={!handleIsGamemodeDisabled(gamemode, userData)}
        >
          <Image
            alt="car image"
            className="image-gradient"
            src={gamemodeImages[index]}
          />

          <CardFooter className="flex items-center gap-5 p-5">
            <p className="font-semibold text-3xl text-secondary">
              {gamemode?.name}
            </p>
            <Divider orientation="vertical" className="h-8" />
            <p className="font-semibold text-sm text-secondary opacity-80 text-left">
              {gamemode?.description}
            </p>
          </CardFooter>
        </Card>
      ) : (
        <Link href={gamemode?.url} style={{ textDecoration: "none" }}>
          <Card
            isFooterBlurred
            className={`${cardStyles} bg-backgroundSecondary w-full`}
            isPressable={!handleIsGamemodeDisabled(gamemode, userData)}
          >
            <Image
              isZoomed
              alt="car image"
              className="image-gradient w-fit h-50"
              src={gamemodeImages[index]}
            />
            <CardFooter className="flex items-center gap-5 p-5">
              <p className="font-semibold text-3xl text-secondary">
                {gamemode?.name}
              </p>
              <Divider orientation="vertical" className="h-8" />
              <p className="font-semibold text-sm text-secondary opacity-80 text-left">
                {gamemode?.description}
              </p>
            </CardFooter>
          </Card>
        </Link>
      )}
    </motion.div>
  );
}
