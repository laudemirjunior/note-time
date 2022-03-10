import { useNavigate } from "react-router-dom";
import { createContext, useCallback, useContext, useState } from "react";
import api from "../services";
import toast from "react-hot-toast";

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
        toast.success("Você está logado!");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Usuário ou senha incorretos");
      });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("@noteTime:accessToken");
    setToken("");
    toast.success("Até logo!");
    navigate("/");
  }, []);

  const registerUser = useCallback(async (data) => {
    await api
      .post("/user/register", data)
      .then((_) => {
        const { email, password } = data;
        logIn({ email, password });
        toast.success("Usuário cadastrado com sucesso!");
      })
      .catch((err) => {
        toast.error("Email já cadastrado");
      });
  }, []);

  return (
    <LoginContext.Provider
      value={{
        token,
        logIn,
        logOut,
        registerUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const UseLogin = () => useContext(LoginContext);
