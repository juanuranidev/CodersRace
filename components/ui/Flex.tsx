import React from "react";

import { Flex as MantineFlex } from "@mantine/core";

export default function Flex({
  gap,
  heigh,
  width,
  children,
  direction = "row",
  alignItems = "center",
  justifyContent = "flex-start",
}: any) {
  return (
    <MantineFlex
      gap={gap}
      h={heigh}
      w={width}
      align={alignItems}
      direction={direction}
      justify={justifyContent}
    >
      {children}
    </MantineFlex>
  );
}
