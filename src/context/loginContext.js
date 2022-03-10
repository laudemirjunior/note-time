import { useNavigate } from "react-router-dom";
import { createContext, useCallback, useContext, useState } from "react";
import api from "../services";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(
    localStorage.getItem("@noteTime:accessToken")
  );

  const logIn = useCallback(async (data) => {
    await api
      .post("/user/login", data)
      .then((response) => {
        const { access_token } = response.data;
        localStorage.setItem("@noteTime:accessToken", access_token);
        setToken(access_token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
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
