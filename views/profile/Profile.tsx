import React, { useState, useEffect } from "react";
import { Container, Text, Group, Avatar, Flex, Card } from "@mantine/core";
import { getUserByIdService } from "services";
import { useUserData } from "lib";
import { useRouter } from "next/router";
import { Loader } from "components";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "assets/icons/GitHub.svg";

type Props = {};

export default function Profile({}: Props) {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetUserById = async () => {
    try {
      const response = await getUserByIdService(id);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      handleGetUserById();
    }
  }, [id]);

  return (
    <Container size="xl">
      {isLoading ? (
        <Flex justify="center" align="center" pt="10rem">
          <Loader />
        </Flex>
      ) : (
        <Flex direction="column" gap="2.5rem">
          <Group>
            <Avatar radius="xl" src={user?.image} size="lg" />
            <Text color="text-primary.0" fw={500} fz={20}>
              {user?.name}
            </Text>
            <Link
              href={`https://github.com/${user?.githubUsername}`}
              target="_blank"
            >
              <Image
                src={GitHubIcon.src}
                width={20}
                height={20}
                alt="GitHub Icon"
              />
            </Link>
          </Group>
          <Card bg="background-secondary.0" radius="md">
            <Flex direction="column" gap="sm">
              <Group>
                <Text fw={600} fz={18}>
                  Carreras Completadas:
                </Text>
                <Text fw={500} fz={15}>
                  {user?.racesCompleted}
                </Text>
              </Group>
              <Group>
                <Text fw={600} fz={18}>
                  CPM Promedio:
                </Text>
                <Text fw={500} fz={15}>
                  {user?.averageCpm}
                </Text>
              </Group>
            </Flex>
          </Card>
          <Card bg="background-secondary.0" radius="md" opacity="0.5">
            <Flex justify="flex-start">
              <Text fw={600} fz={20}>
                Amigos
              </Text>
            </Flex>
            <Flex justify="center">
              <Text fw={600} fz={25} py={50}>
                Próximamente...
              </Text>
            </Flex>
          </Card>
          <Card bg="background-secondary.0" radius="md" opacity="0.5">
            <Flex justify="flex-start">
              <Text fw={600} fz={20}>
                Logros
              </Text>
            </Flex>
            <Flex justify="center">
              <Text fw={600} fz={25} py={50}>
                Próximamente...
              </Text>
            </Flex>
          </Card>
        </Flex>
      )}
    </Container>
  );
}
