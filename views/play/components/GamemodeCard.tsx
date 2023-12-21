import React, { useEffect, useState } from "react";
import {
  Card,
  CardFooter,
  Image,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { cardAnimations } from "views/play/Utils";
import { useUserData } from "lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import GamemodeCar1 from "assets/images/GamemodeCar1.jpg";
import GamemodeCar2 from "assets/images/GamemodeCar2.jpg";
import GamemodeCar3 from "assets/images/GamemodeCar3.jpg";
import { LanguageType, UserType } from "lib/types";
import GamemodeCardDisabled from "./GamemodeCardDisabled";
import { getLanguagesService } from "services";
import { LanguageIcon } from "lib/utils";
import { Loader } from "components";

type Props = {
  gamemode: any;
  index: number;
};

export default function GamemodeCard({ gamemode, index }: Props) {
  const userData = useUserData();
  const gamemodeImages = [GamemodeCar1.src, GamemodeCar2.src, GamemodeCar3.src];

  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleIsGamemodeDisabled = (
    gamemode: any,
    userData: UserType
  ): boolean => {
    if (gamemode?.isDisabled) return true;
    if (gamemode?.requiresUser && !userData) return true;

    return false;
  };

  const handleGetLanguages = async () => {
    try {
      const response = await getLanguagesService();

      setLanguages(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetLanguages();
  }, []);

  return (
    <motion.div
      variants={cardAnimations}
      animate={!handleIsGamemodeDisabled(gamemode, userData) && "cardHovered"}
    >
      {handleIsGamemodeDisabled(gamemode, userData) ? (
        <GamemodeCardDisabled
          index={index}
          gamemode={gamemode}
          gamemodeImages={gamemodeImages}
        />
      ) : (
        <Dropdown>
          <DropdownTrigger>
            <Card
              isFooterBlurred
              className="user-select-none bg-backgroundSecondary w-full opacity-100 cursor-pointer hover:bg-[#26252b]"
              // isPressable={!handleIsGamemodeDisabled(gamemode, userData)}
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
          </DropdownTrigger>
          <DropdownMenu closeOnSelect={false}>
            {isLoading ? (
              <Loader />
            ) : (
              languages.map((language: LanguageType) => (
                <DropdownItem key={language.id} className="my-1">
                  <div className="flex items-center justify-start gap-4">
                    <LanguageIcon language={language.name} width={30} />
                    <p className="uppercase text-md">{language?.name}</p>
                  </div>
                </DropdownItem>
              ))
            )}
          </DropdownMenu>
        </Dropdown>
      )}
    </motion.div>
  );
}
