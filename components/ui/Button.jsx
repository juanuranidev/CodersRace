import React from "react";
import { Button as MantineButton } from "@mantine/core";

export default function Button({ variant, onClick, disabled, ...props }) {
  return (
    <MantineButton variant={variant} onClick={onClick} disabled={disabled}>
      Button
    </MantineButton>
  );
}
