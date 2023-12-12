import React from "react";
import { gamemodes } from "./Utils";
import GamemodeCard from "views/play/components/GamemodeCard";

export default function Play() {
  return (
    <div className="container mx-auto px-5 pb-10">
      <p className="font-semibold text-secondary py-8 text-lg">
        Elige tu modo de juego
      </p>
      <div className="grid grid-cols-2 gap-4">
        {gamemodes.map((gamemode: any, index: number) => (
          <GamemodeCard gamemode={gamemode} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
