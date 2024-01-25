import React, { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { Spin } from "antd";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setLoading(false);
        nav("/");
        return;
      }
      setLoading(false);
      nav("/login");
    });

    return () => {
      unsubscribe();
    };
  }, [nav]);
  return (
    <>
      <AuthContext.Provider value={user}>
        {isLoading ? <Spin /> : children}
      </AuthContext.Provider>
    </>
  );
}
