import React, { useContext } from "react";
import { UserDataContext } from "../contexts/UserData";

export default function useUserData() {
  const { userData } = useContext(UserDataContext);
  return userData;
}
