import React, { useEffect, useState } from "react";
import { Container, Flex, Text, Table, Card } from "@mantine/core";
import { getLeaderboardService } from "services";

export default function Ranking({}) {
  const [leaderBoard, setLeaderboard] = useState([]);

  const handleGetLeaderboard = async () => {
    try {
      const response = await getLeaderboardService();
      console.log(response);
      setLeaderboard(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetLeaderboard();
  }, []);

  return (
    <Container size="xl">
      <Flex justify="flex-start" align="center" pt="2.5rem" pb="1rem">
        <Text color="text-primary.0" fw={500} fz={20}>
          Mejores corredores
        </Text>
        <Card>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Element position</Table.Th>
                <Table.Th>Element name</Table.Th>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Atomic mass</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>dwaodnad</Table.Td>
                <Table.Td>dwaodnad</Table.Td>
                <Table.Td>dwaodnad</Table.Td>
                <Table.Td>dwaodnad</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Card>
      </Flex>
      <ComingSoonCard />
    </Container>
  );
}
