import { PublicLayout } from "components";
import React from "react";
import { Championship, Play } from "views";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <Play />
    </PublicLayout>
  );
}
