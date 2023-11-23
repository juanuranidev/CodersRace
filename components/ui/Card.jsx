import React from "react";
import { Card as MantineCard } from "@mantine/core";

export default function Card({ p, w, radius, bg, ref, children, ...props }) {
  return (
    <MantineCard p={p} w={w} radius={radius} bg={bg} ref={ref} {...props}>
      {children}
    </MantineCard>
  );
}
