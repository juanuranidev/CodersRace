import React from "react";
import { PublicLayout } from "components";
import { SelectLanguage } from "views";
export default function index() {
  return (
    <PublicLayout>
      <SelectLanguage baseUrl="/race" />
    </PublicLayout>
  );
}

index.auth = {
  unauthorized: "/",
};
