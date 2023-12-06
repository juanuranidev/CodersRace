import React, { useEffect, useState } from "react";
import { Flex, Text, Table, Group, Avatar, Container } from "@mantine/core";
import { getLeaderboardService } from "services";
import { Loader } from "components";
import { Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

import { Image } from "@nextui-org/react";

export default function Ranking({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const handleGetLeaderboard = async () => {
    setIsLoading(true);
    try {
      const response = await getLeaderboardService();
      setLeaderboard(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetLeaderboard();
  }, []);

  return (
    <Container size="xl">
      <Flex justify="flex-start" align="center" pb="2.5rem">
        <Text color="text-primary.0" fw={500} fz={20}>
          Mejores corredores
        </Text>
      </Flex>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded" isLoading={!0}>
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>

      <Image
        width={300}
        alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
      <Switch defaultSelected aria-label="Automatic updates" />
      {isLoading ? (
        <Flex justify="center" align="center" pt="10rem">
          <Loader />
        </Flex>
      ) : (
        <Card>
          <Table>
            <thead>
              <tr>
                <th>
                  <p className="text-small font-semibold leading-none text-default-600">
                    Posición
                  </p>
                </th>
                <th>Usuario</th>
                <th>CPM Promedio</th>
                <th>Carreras</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user: any, index) => (
                <tr key={user.id}>
                  <td>
                    <Text fw={600} fz={16}>
                      {index + 1}
                    </Text>
                  </td>
                  <td>
                    <Group spacing="xs">
                      <Avatar
                        src={user.image}
                        alt="user image"
                        radius="xl"
                        size="md"
                      />
                      <Text fw={600} fz={14}>
                        {user.name}
                      </Text>
                    </Group>
                  </td>
                  <td>
                    <Text fw={600} fz={14}>
                      {user.averageCpm}
                    </Text>
                  </td>
                  <td>
                    <Text fw={600} fz={14}>
                      {user.totalRaces}
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </Container>
  );
}
