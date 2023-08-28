import React from "react";
import { PublicLayout } from "components";
import { SelectLanguage } from "views";

type Props = {};

export default function leaderboard({}: Props) {
  return (
    <PublicLayout>
      <SelectLanguage />
    </PublicLayout>
  );
}
