// import { TextField } ;
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Text, VStack } from "@chakra-ui/react";

const schema = yup.object().shape({
  name: yup.string().required("Insira seu username*"),
  password: yup.string().required("Insira sua senha*"),
  email: yup
    .string()
    .required("Insira seu nome*")
    .email("digite um email valido"),
});

export const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleRegister = (values, e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <h1>Registrar</h1>

      <VStack
        as="form"
        onSubmit={handleSubmit(handleRegister)}
        alignItems="center"
        maxh="500px"
        borderRadius="10px"
        width={["350px", "350px", "350px", "500px"]}
        p="10px"
        bgColor="var(--white)"
        textAlign="center"
        gridGap="10px"
      >
        <Input
          type="text"
          id="outlined-basicEmail"
          label="Nome"
          placeholder="Nome"
          {...register("name")}
          h="50px"
          mt="2vh"
          w="95%"
          p="5px"
          borderRadius="15px"
          bgColor="var(--snow)"
        />
        <Text h="10px" color="red" fontSize="15px">
          {errors.name && errors.name.message}
        </Text>
        <Input
          type="text"
          id="outlined-basicEmail"
          label="Email"
          placeholder="Email"
          {...register("email")}
          h="50px"
          mt="2vh"
          w="95%"
          p="5px"
          borderRadius="15px"
          bgColor="var(--snow)"
        />
        <Text h="10px" color="red" fontSize="15px">
          {errors.email && errors.email.message}
        </Text>
        <Input
          type="password"
          id="outlined-basicEmail"
          label="Password"
          placeholder="Password"
          {...register("password")}
          h="50px"
          mt="2vh"
          w="95%"
          p="5px"
          borderRadius="15px"
          bgColor="var(--snow)"
        />
        <Text h="10px" color="red" fontSize="15px">
          {errors.password && errors.password.message}
        </Text>
        <Button
          type="submit"
          bgColor="var(--darkBlue)"
          w="95%"
          h="50px"
          borderRadius="15px"
          mt="3vh"
          color="var(--white)"
          fontSize="18px"
        >
          Cadastrar
        </Button>
        <Text>Já possui conta? Entre aqui</Text>
        <Button
          onClick={() => navigate("/login")}
          bgColor="var(--lightBlue)"
          w="95%"
          h="50px"
          borderRadius="15px"
          mt="3vh"
          color="var(--white)"
          fontSize="18px"
        >
          Entrar
        </Button>
        <Text>Para recuperar a senha clique aqui</Text>
      </VStack>
    </>
  );
};
