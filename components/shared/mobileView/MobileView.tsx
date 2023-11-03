import React from "react";
import { Card, Text, Container } from "@mantine/core";

type Props = {};

export default function MobileView({}: Props) {
  return (
    <Container bg="background-primary.0" size="full" h="100%">
      <Card bg="red">
        <Text>Wow</Text>
        <Text>Wow</Text>
      </Card>
    </Container>
  );
}
