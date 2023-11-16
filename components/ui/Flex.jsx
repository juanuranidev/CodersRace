import React from "react";

import { Flex as MantineFlex } from "@mantine/core";

export default function Flex({
  gap,
  children,
  direction = "row",
  alignItems = "center",
  justifyContent = "flex-start",
}) {
  return (
    <MantineFlex
      gap={gap}
      align={alignItems}
      justify={justifyContent}
      direction={direction}
    >
      {children}
    </MantineFlex>
  );
}
