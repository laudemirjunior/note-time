import { createContext, useCallback, useContext, useState } from "react";
import api from "../services";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem("@noteTime:accessToken")) || ""
  );

  const logIn = useCallback(async (loginData) => {
    await api
      .post("/user/login", loginData)
      .then((response) => {
        const { access_token } = response.data;
        localStorage.setItem("@noteTime:accessToken", access_token);
        setToken(access_token);
      })
      .catch((_) => console.log("Erro ao conectar a API"));
  }, []);

  return (
    <LoginContext.Provider
      value={{
        token,
        logIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
