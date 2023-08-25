import React from "react";
import { Box, createStyles, Flex, Text } from "@mantine/core";
import { landingCodes } from "lib";

const useStyles = createStyles({
  background: {
    maxHeight: "",
  },
});

export default function Background() {
  return (
    <Box w="100%">
      {landingCodes.map((code) => (
        <Flex justify={code.justify}>
          <Text color="white" opacity="0.06">
            {code.text}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}
