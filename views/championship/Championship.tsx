import React from "react";
import { Container } from "@mantine/core";
import { ComingSoonCard } from "components";

type Props = {};

export default function Championship({}: Props) {
  return (
    <Container size="xl" pt="xl">
      <ComingSoonCard />
    </Container>
  );
}
