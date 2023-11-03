import { Flex, Box } from "@mantine/core";
import React from "react";

export default function ScreenLoader({}) {
  return (
    <Flex h="100vh" w="100%" justify="center" align="center">
      <Box className="loader" />
    </Flex>
  );
}
