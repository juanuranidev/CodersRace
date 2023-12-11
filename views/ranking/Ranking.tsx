import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Avatar,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableColumn,
} from "@nextui-org/react";
import { getLeaderboardService } from "services";
import { Loader } from "components";

export default function Ranking({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const loadingState = isLoading || !leaderboard.length ? "loading" : "idle";

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
    <div className="container mx-auto px-5">
      <p className="font-semibold text-secondary py-8 text-lg">
        Mejores Correrores
      </p>
      <Card className="bg-backgroundSecondary" radius="md">
        <Table aria-label="Ranking de usuarios" removeWrapper isCompact>
          <TableHeader>
            <TableColumn>Posición</TableColumn>
            <TableColumn>Usuario</TableColumn>
            <TableColumn style={{ textAlign: "center" }}>
              CPM Promedio
            </TableColumn>
            <TableColumn style={{ textAlign: "center" }}>Carreras</TableColumn>
          </TableHeader>
          <TableBody
            items={leaderboard ?? []}
            loadingContent={<Loader />}
            loadingState={loadingState}
            emptyContent={"No hay usuarios para mostrar."}
          >
            {(user: any) => (
              <TableRow key={user?.id} onClick={() => console.log(user)}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <div className="flex flex-row gap-4 items-center">
                    <Avatar src={user.image} alt="user image" size="md" />
                    <p className="font-semibold text-secondary py-4 text-md">
                      {user?.name}
                    </p>
                  </div>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <p className="font-semibold text-secondary py-4 text-md">
                    {user?.averageCpm}
                  </p>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <p className="font-semibold text-secondary py-4 text-md">
                    {user?.races}
                  </p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
