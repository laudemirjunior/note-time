import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Text, VStack } from "@chakra-ui/react";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Insira seu email")
    .email("Digite um email valido"),
  password: yup.string().required("Insira sua senha*"),
});

export const FormLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (values, e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <>
      <h1>Entrar</h1>
      <VStack
        as="form"
        onSubmit={handleSubmit(handleLogin)}
        alignItems="center"
        maxh="500px"
        borderRadius="10px"
        width={["350px", "350px", "350px", "500px"]}
        bgColor="#114b5f"
        p="10px"
        color="var(--white)"
        textAlign="center"
        gridGap="10px"
      >
        <Input
          type="text"
          id="outlined-basicEmail"
          label="Email"
          placeholder="Email"
          {...register("email")}
          border="1px solid black"
          height="50px"
          w="95%"
          p="5px"
          borderRadius="15px"
          bg="var(--snow)"
          mt="2vh"
        />
        <Text h="10px" color="red" fontSize="15px">
          {errors.email && errors.email.message}
        </Text>
        <Input
          type="password"
          id="outlined-basicPassword"
          label="Senha"
          placeholder="Senha"
          {...register("password")}
          borderColor="red.300"
          border="1px solid black"
          height="50px"
          w="95%"
          p="5px"
          borderRadius="15px"
          bg="var(--snow)"
          mt="2vh"
        />
        <Text h="10px" color="red" fontSize="15px">
          {errors.email && errors.password.message}
        </Text>
        <Button
          type="submit"
          bg="#028090"
          width="95%"
          height="50px"
          borderRadius="15px"
          marginTop="3vh"
          color="var(--white)"
          fontSize="18px"
          transition="0.5s"
          _hover={{ opacity: "0.5" }}
        >
          Entrar
        </Button>
        <Text fontSize="16px">Não possui conta? Clique no botão abaixo</Text>
        <Button
          onClick={() => navigate("/register")}
          bg="#028090"
          width="95%"
          opacity="70%"
          height="50px"
          borderRadius="15px"
          marginTop="3vh"
          color="var(--white)"
          fontSize="18px"
          transition="0.5s"
          _hover={{ opacity: "0.5" }}
        >
          Cadastre-se
        </Button>
        <Text fontSize="16px">Para recuperar a senha clique aqui</Text>
      </VStack>
    </>
  );
};
