import React from "react";
import { SelectLanguage } from "views";
import { PublicLayout } from "components";

export default function index() {
  return (
    <PublicLayout>
      <SelectLanguage baseUrl="/practice" />
    </PublicLayout>
  );
}
