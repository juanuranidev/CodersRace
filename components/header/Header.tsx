import React from "react";
import {
  Menu,
  Flex,
  Group,
  Button,
  Avatar,
  Container,
  createStyles,
  Text,
} from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import GitHubIcon from "assets";
import Image from "next/image";
import Link from "next/link";
import { useUserData } from "hooks";

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
  const userData = useUserData();

  console.log(userData);

  return (
    <Container size="full" bg="#15141a" p="0">
      <Container size="xl" p="md">
        <Flex justify="space-between">
          <Group spacing={50}>
            <Link className={classes.link} href="/">
              Inicio
            </Link>
            <Link className={classes.link} href="/race">
              Correr
            </Link>
            <Link className={classes.link} href="/championship">
              Campeonatos
            </Link>
            <Link className={classes.link} href="/ranking">
              Ranking
            </Link>
          </Group>
          {userData?.image ? (
            <Menu>
              <Menu.Target>
                {/* <Text>{data?.user?.githubUsername}</Text> */}
                <Avatar
                  radius="xl"
                  src={userData?.image}
                  style={{ cursor: "pointer" }}
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => signOut()}>Cerrar sesión</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
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
              onClick={() => signIn("github")}
            >
              Sign in
            </Button>
          )}
        </Flex>
      </Container>
    </Container>
  );
}
