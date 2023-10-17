import React from "react";
import { SelectLanguage } from "views";
import { PublicLayout } from "components";

type Props = {};

export default function index({}: Props) {
  return (
    <PublicLayout>
      <SelectLanguage baseUrl="/practice" />
    </PublicLayout>
  );
}
