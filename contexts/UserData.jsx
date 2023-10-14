import React, { useEffect, useState, createContext } from "react";
import { useSession } from "next-auth/react";

export const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const { data } = useSession();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
