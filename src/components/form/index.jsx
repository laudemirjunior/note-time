// import { TextField } ;
import { Link, useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form } from "./style.js";
import { useState } from "react";

const FormComponent = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <h1>Entrar</h1>
      <Form>
        {login ? (
          <>
            <input
              type="text"
              id="outlined-basicEmail"
              label="Email"
              placeholder="Email"
              // helperText={errors.email?.message}
              // {...register("email")}
            />

            <input
              type="password"
              id="outlined-basicPassword"
              label="Senha"
              placeholder="Senha"
              // helperText={errors.password?.message}
              // {...register("password")}
            />

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
              // helperText={errors.email?.message}
              // {...register("email")}
            />
            <input
              type="text"
              id="outlined-basicEmail"
              label="Email"
              placeholder="Nome"
              // helperText={errors.email?.message}
              // {...register("email")}
            />
            <input
              type="password"
              id="outlined-basicPassword"
              label="Senha"
              placeholder="Senha"
              // helperText={errors.password?.message}
              // {...register("password")}
            />

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
