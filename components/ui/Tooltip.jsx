import React from "react";
import { Tooltip as MantineTooltip } from "@mantine/core";

export default function Tooltip({
  label,
  transition,
  withArrow,
  multiline,
  w,
  h,
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
      Tooltip
    </MantineTooltip>
  );
}
