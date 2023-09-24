import { PublicLayout } from "components";
import React from "react";
import { Championship } from "views";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <Championship />
    </PublicLayout>
  );
}
