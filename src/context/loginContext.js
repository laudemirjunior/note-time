import { createContext, useCallback, useContext, useState } from "react";
import api from "../services";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem("@noteTime:accessToken")) || ""
  );

  const logIn = useCallback(async (data) => {
    console.log(data);
    await api
      .post("/user/login", data)
      .then((response) => {
        const { access_token } = response.data;
        console.log(response);
        localStorage.setItem("@noteTime:accessToken", access_token);
        setToken(access_token);
      })
      .catch((_) => console.log("Erro ao conectar a API"));
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("@noteTime:accessToken");
    setToken("");
  }, []);

  return (
    <LoginContext.Provider
      value={{
        token,
        logIn,
        logOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const UseLogin = () => useContext(LoginContext);

export const useLoginContext = () => useContext(LoginContext);
