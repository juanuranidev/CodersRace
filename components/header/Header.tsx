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
  Header as MantineHeader,
  Box,
  Card,
} from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import GitHubIcon from "assets";
import Image from "next/image";
import Link from "next/link";
import { useUserData } from "lib";
import ArrowDown from "assets/icons/ArrowDown.svg";

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

  return (
    <MantineHeader height={68}>
      <Container size="full" bg="#15141a" p="0">
        <Container size="xl" p="md">
          <Flex justify="space-between">
            <Group spacing={50}>
              <Link className={classes.link} href="/">
                Inicio
              </Link>
              <Link className={classes.link} href="/play">
                Jugar
              </Link>
              <Link className={classes.link} href="/ranking">
                Ranking
              </Link>
            </Group>
            {userData?.image ? (
              <Menu
                withArrow
                transitionProps={{ transition: "pop", duration: 150 }}
              >
                <Menu.Target>
                  <Group style={{ cursor: "pointer" }} spacing="xs">
                    <Avatar radius="xl" src={userData?.image} />
                    <Image
                      src={ArrowDown.src}
                      width={20}
                      height={20}
                      alt="arrow icon"
                    />
                  </Group>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>
                    <Text>{userData?.githubUsername}</Text>
                  </Menu.Label>
                  <Menu.Divider />
                  <Link
                    href={`/profile/${userData._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Menu.Item>Perfil</Menu.Item>
                  </Link>
                  <Menu.Item onClick={() => signOut()} color="red">
                    Cerrar sesión
                  </Menu.Item>
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
    </MantineHeader>
  );
}
