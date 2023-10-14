import React from "react";
import { Ranking } from "views";
import { PublicLayout } from "components";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <Ranking />
    </PublicLayout>
  );
}

index.auth = {
  unauthorized: "/",
};
