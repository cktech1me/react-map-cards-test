import React, { useState, useMemo, useContext } from "react";
import { createContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <Context.Provider value={userProvider}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext(Context);

export default Provider;
