import React from "react";
import { Tooltip, Card, CardFooter, Image } from "@nextui-org/react";
import { cardAnimations } from "views/play/Utils";
import { useUserData } from "lib";
import { motion } from "framer-motion";
import Link from "next/link";
import GamemodeCar1 from "assets/images/GamemodeCar1.jpg";
import GamemodeCar2 from "assets/images/GamemodeCar2.jpg";
import GamemodeCar3 from "assets/images/GamemodeCar3.jpg";

type Props = {};

export default function GamemodeCard({ gamemode, index }: any) {
  const userData = useUserData();
  const gamemodeImages = [GamemodeCar1.src, GamemodeCar2.src, GamemodeCar3.src];

  const handleIsGamemodeDisabled = (gamemode: any, userData: any): boolean => {
    if (gamemode?.isDisabled) return true;
    if (gamemode?.requiresUser && !userData) return true;

    return false;
  };

  const cardStyles = `user-select-none ${
    handleIsGamemodeDisabled(gamemode, userData)
      ? "opacity-20 cursor-not-allowed"
      : "opacity-100 cursor-pointer hover:bg-[#26252b]"
  }`;

  return (
    <Tooltip content={gamemode?.tooltipText} color="secondary">
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
              width="100%"
              height={250}
              alt="car image"
              className="image-gradient"
              src={gamemodeImages[index]}
            />

            <CardFooter>
              <p className="font-semibold text-3xl text-secondary ml-2">
                {gamemode?.name}
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
                width="100%"
                height={250}
                alt="car image"
                className="image-gradient"
                src={gamemodeImages[index]}
              />
              <CardFooter>
                <p className="font-semibold text-3xl text-secondary ml-2">
                  {gamemode?.name}
                </p>
              </CardFooter>
            </Card>
          </Link>
        )}
      </motion.div>
    </Tooltip>
  );
}
