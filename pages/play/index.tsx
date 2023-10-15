import React from "react";
import { Play } from "views";
import { PublicLayout } from "components";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <Play />
    </PublicLayout>
  );
}
