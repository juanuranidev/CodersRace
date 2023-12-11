import React, { useState, useEffect } from "react";
import {
  Card,
  Image,
  Avatar,
  Divider,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { getUserByIdService } from "services";
import { useRouter } from "next/router";
import { Loader } from "components";
import Link from "next/link";
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
    <div className="container mx-auto px-5">
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="py-8">
          <div className="flex flex-row items-center gap-5">
            <Avatar src={user?.image} size="md" />
            <div className="flex flex-row items-center gap-1">
              <p className="font-semibold text-secondary text-lg">
                {user?.name}
              </p>
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
            </div>
          </div>
          <Card className="mt-10 bg-backgroundSecondary" radius="md">
            <CardHeader className="font-semibold text-lg">
              Estadísticas
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex flex-row items-center gap-2">
                <p className="font-semibold text-sm">Carreras Completadas:</p>
                <p>{user?.races}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="font-semibold text-sm"> CPM Promedio:</p>
                <p>{user?.averageCpm}</p>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-10 bg-backgroundSecondary" radius="md">
            <CardHeader className="font-semibold text-lg">Amigos</CardHeader>
            <Divider />
            <CardBody>
              <p className="font-semibold text-lg text-center py-5">
                PRÓXIMAMENTE
              </p>
            </CardBody>
          </Card>
          <Card className="mt-10 bg-backgroundSecondary" radius="md">
            <CardHeader className="font-semibold text-lg">Logros</CardHeader>
            <Divider />
            <CardBody>
              <p className="font-semibold text-lg text-center py-5">
                PRÓXIMAMENTE
              </p>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
}
