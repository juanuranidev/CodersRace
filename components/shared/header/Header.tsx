import React from "react";
import {
  Text,
  Menu,
  Flex,
  Button as MantineButton,
  Group,
  Avatar,
  Container,
  createStyles,
  Header as MantineHeader,
} from "@mantine/core";
import { signIn, signOut } from "next-auth/react";
import { useUserData } from "lib";
import GitHubIcon from "assets";
import ArrowDown from "assets/icons/ArrowDown.svg";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Divider,
} from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import GitHubButton from "../GitHubButton/GitHubButton";

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
  const userData = useUserData();

  return (
    <div className="container mx-auto">
      <div
        // isBordered
        className=" bg-background flex flex-row justify-around"
        style={{ minWidth: "100%", width: "100%" }}
      >
        <div
        // justify="start"
        // className="flex flex-row gap-6"
        >
          <Link
            className="font-semibold hover:underline"
            color="secondary"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="font-semibold hover:underline"
            color="secondary"
            href="/play"
          >
            Jugar
          </Link>
          <Link
            className="font-semibold hover:underline"
            color="secondary"
            href="/ranking"
          >
            Ranking
          </Link>
        </div>
        <div
        // justify="end"
        // className="min-w-full"
        >
          <div className="cursor-pointer">
            {userData ? (
              <Dropdown className="cursor-pointer">
                <DropdownTrigger>
                  {/* <Button variant="bordered">Open Menu</Button> */}
                  {/* <Group style={{ cursor: "pointer" }} spacing="xs"> */}
                  <div className="flex gap-2">
                    <Avatar radius="xl" src={userData?.image} />
                    <Image
                      src={ArrowDown.src}
                      width={20}
                      height={20}
                      alt="arrow icon"
                    />
                  </div>
                  {/* </Group> */}
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  <DropdownItem
                    key="new"
                    // variant=""
                    onClick={undefined}
                    style={{ cursor: "default" }}
                  >
                    <Text>{userData?.githubUsername}</Text>
                  </DropdownItem>
                  <DropdownItem
                    key="new"
                    // variant=""
                    onClick={undefined}
                    style={{ cursor: "default" }}
                  >
                    <Divider />
                  </DropdownItem>
                  <DropdownItem key="copy">
                    <Link
                      href={`/profile/${userData.id}`}
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        width: "100%",
                      }}
                    >
                      Perfil
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => signOut()}
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Cerrar sesión
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <GitHubButton onClick={() => signIn("github")}>
                Sign in
              </GitHubButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
