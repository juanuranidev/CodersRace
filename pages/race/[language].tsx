import React from "react";
import { PublicLayout } from "components";
import { Race } from "views";

type Props = {};

export default function leaderboard({}: Props) {
  return (
    <PublicLayout>
      <Race />
    </PublicLayout>
  );
}
