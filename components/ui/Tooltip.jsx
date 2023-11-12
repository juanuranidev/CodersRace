import React from "react";
import { Tooltip as MantineTooltip } from "@mantine/core";

export default function Tooltip({
  w,
  h,
  label,
  children,
  withArrow,
  multiline,
  transition,
}) {
  return (
    <MantineTooltip
      label={label}
      transition={transition}
      withArrow={withArrow}
      multiline={multiline}
      w={w}
      h={h}
    >
      {children}
    </MantineTooltip>
  );
}
