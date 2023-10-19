import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Card,
  Table,
  Group,
  Avatar,
  Container,
} from "@mantine/core";
import { getLeaderboardService } from "services";
import { Loader } from "components";

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
      {isLoading ? (
        <Flex justify="center" align="center" pt="10rem">
          <Loader />
        </Flex>
      ) : (
        <Card>
          <Table>
            <thead>
              <tr>
                <th>Posición</th>
                <th>Usuario</th>
                <th>CPM Promedio</th>
                <th>Carreras</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user: any, index) => (
                <tr key={user._id}>
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
