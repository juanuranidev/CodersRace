import React from "react";
import { Race } from "views";
import { PublicLayout } from "components";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <Race />
    </PublicLayout>
  );
}

index.auth = {
  unauthorized: "/",
};
