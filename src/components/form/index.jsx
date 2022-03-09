// import { TextField } ;
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./style.js";
import { useState } from "react";
import { UseLogin } from "../../context/loginContext";

const FormComponent = () => {
  const { logIn } = UseLogin();
  const [login, setLogin] = useState(true);

  const LoginSchema = yup.object().shape({
    email: yup.string().email("email inválido").required("email obrigatório"),
    password: yup
      .string()
      .required("senha obrigatória")
      .min(4, "Mínimo de 4 dígitos"),
  });

  const RegisterSchema = yup.object().shape({
    name: yup.string().required("nome obrigatório"),
    email: yup.string().email("email inválido").required("email obrigatório"),
    password: yup
      .string()
      .required("senha obrigatória")
      .min(4, "Mínimo de 4 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: login ? yupResolver(LoginSchema) : yupResolver(RegisterSchema),
  });

  function onSubmitFunction(data) {
    logIn(data);
  }

  return (
    <>
      <h1>Entrar</h1>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        {login ? (
          <>
            <input
              type="text"
              id="outlined-basicEmail"
              label="Email"
              placeholder="Email"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>

            <input
              type="password"
              id="outlined-basicPassword"
              label="Senha"
              placeholder="Senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>

            <button type="submit">Entrar</button>
            <span>Não possui conta? Clique no botão abaixo</span>
            <button onClick={() => setLogin(false)}>Cadastre-se</button>
            <span>Para recuperar a senha clique aqui</span>
          </>
        ) : (
          <>
            <input
              type="text"
              id="outlined-basicEmail"
              label="Nome"
              placeholder="Nome"
              {...register("name")}
            />
            <span>{errors.name?.message}</span>
            <input
              type="text"
              id="outlined-basicEmail"
              label="Email"
              placeholder="Nome"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
            <input
              type="password"
              id="outlined-basicPassword"
              label="Senha"
              placeholder="Senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>

            <button type="submit">Cadastrar</button>
            <span>Já possui conta? Entre aqui</span>
            <button onClick={() => setLogin(true)}>Entrar</button>
            <span>Para recuperar a senha clique aqui</span>
          </>
        )}
      </Form>
    </>
  );
};

export default FormComponent;
