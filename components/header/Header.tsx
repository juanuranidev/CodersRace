import React from "react";
import {
  Box,
  Container,
  Group,
  Flex,
  Button,
  createStyles,
} from "@mantine/core";
import Link from "next/link";
import GitHubIcon from "assets";
import Image from "next/image";

const useStyles = createStyles(() => ({
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 500,
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

type Props = {};

export default function Header({}: Props) {
  const { classes } = useStyles();

  return (
    <Container size="full" bg="#15141a" p="0">
      <Container size="xl" p="md">
        <Flex justify="space-between">
          <Group spacing={50}>
            <Link className={classes.link} href="/">
              Correr
            </Link>
            <Link className={classes.link} href="/">
              Campeonatos
            </Link>
            <Link className={classes.link} href="/">
              Ranking
            </Link>
          </Group>
          <Button
            leftIcon={
              <Image
                src={GitHubIcon}
                alt="github icon"
                width="25"
                height="25"
              />
            }
            variant="github"
          >
            Sign in
          </Button>
        </Flex>
      </Container>
    </Container>
  );
}
