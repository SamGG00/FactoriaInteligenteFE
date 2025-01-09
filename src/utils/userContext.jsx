import React, { createContext, useState, useEffect } from "react";
import { decryptStorage,encryptStorage } from "./dataEncrypt";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    () => decryptStorage(localStorage.getItem("u25#5dvo$iasFD5#")) || "" 
  ); /* user */
  const [userId, setUserId] = useState(
    () => decryptStorage(localStorage.getItem("f2H6%8sbn&5j481")) || ""
  ); /* userId */
 
  useEffect(() => {
    const tabCount = sessionStorage.getItem("tabCount");
    sessionStorage.setItem("tabCount", tabCount ? parseInt(tabCount) + 1 : 1);

    

  
    if (user) {
      localStorage.setItem("u25#5dvo$iasFD5#", encryptStorage(user));
    }
    if (userId) {
      localStorage.setItem("f2H6%8sbn&5j481", encryptStorage(userId));
    }

    const handleBeforeUnload = () => {
      const tabCount = sessionStorage.getItem("tabCount");
      if (tabCount) {
        const newCount = parseInt(tabCount) - 1;
        sessionStorage.setItem("tabCount", newCount);

        if (newCount === 0) {
          localStorage.removeItem("u25#5dvo$iasFD5#"); /* user */
          localStorage.removeItem("f2H6%8sbn&5j481");/* userID */
      
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user,userId]);

  return (
    <UserContext.Provider
      value={{
        userId,
        user,
        setUser,
        setUserId

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };