"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/FierbaseConfig.jsx";

export const UserContext = createContext();
function UserProvider({ children }) {
  const [userEmail, setuserEmail] = useState();
  const [uid, setUid] = useState("");
  const router = useRouter();

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
  const userLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const useruid = localStorage.setItem("userUid", user.uid);
        router.push("/Dashbarnav");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <UserContext.Provider value={{ userCreate, userLogin, setUid, uid }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
