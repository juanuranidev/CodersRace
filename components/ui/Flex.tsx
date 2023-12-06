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
  const handleFormatJustifyContent = (justifyContent: string) => {
    switch (justifyContent) {
      case "flex-start":
        return "justify-start";
      case "flex-end":
        return "justify-end";
      case "center":
        return "justify-center";
      case "space-between":
        return "justify-between";
    }
  };

  const handleFormatFlexDirection = () => {};

  return (
    <div
      className={`flex ${handleFormatJustifyContent(justifyContent)}`}
      // gap={gap}
      // h={heigh}
      // w={width}
      // align={alignItems}
      // direction={direction}
      // justify={justifyContent}
    >
      {children}
    </div>
  );
}
