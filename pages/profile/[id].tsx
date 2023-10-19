import React from "react";
import { PublicLayout } from "components";
import { Profile } from "views";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <Profile />
    </PublicLayout>
  );
}
