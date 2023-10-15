import React from "react";
import { PublicLayout } from "components";
import { SelectLanguage } from "views";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <SelectLanguage />
    </PublicLayout>
  );
}

index.auth = {
  unauthorized: "/",
};
