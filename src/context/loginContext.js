import { createContext, useContext } from "react";
import api from "../services";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
};

export const useLoginContext = () => useContext(LoginContext);
