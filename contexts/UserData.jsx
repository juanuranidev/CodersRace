import { useSession } from "next-auth/react";
import React, { useEffect, useState, createContext } from "react";

export const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);

  if (!data) return <p>Loading...</p>;

  return (
    <UserDataContext.Provider
      value={{
        userData,
      }}
    >
      {/* {loadin... && <LOADING />}
       */}
      {data && children}
    </UserDataContext.Provider>
  );
};
