"use client";

import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FierbaseConfig.jsx";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userEmail, setuserEmail] = useState();

  const userCreate = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <UserContext.Provider value={{ userCreate }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
