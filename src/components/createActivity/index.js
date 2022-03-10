import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserContext } from "../../context/userContext";
import { Button, Input, VStack, Text, Box } from "@chakra-ui/react";

function CreateActivity() {
  const { createActivity } = useUserContext();
  const schema = yup.object().shape({
    name: yup.string().required("Insira o nome da atividade*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCreate = (value, e) => {
    e.preventDefault();
    createActivity(value);
  };

  return (
    <>
      <VStack
        as="form"
        onSubmit={handleSubmit(handleCreate)}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        maxh="500px"
        borderRadius="10px"
        width="80%"
        p="10px"
        bgColor="var(--black)"
        textAlign="center"
        gridGap="10px"
      >
        <Box display="flex" flexDirection="column" w="90%">
          <Input
            type="text"
            id="outlined-basicEmail"
            label="Nome"
            placeholder="Nome"
            {...register("name")}
            h="40px"
            mt="2vh"
            w="95%"
            p="5px"
            borderRadius="15px"
            bgColor="var(--snow)"
          />
          <Text h="10px" color="red" fontSize="15px">
            {errors.name && errors.name.message}
          </Text>
        </Box>

        <Button
          type="submit"
          bgColor="var(--darkBlue)"
          w="95%"
          h="30px"
          mt="3vh"
          borderRadius="15px"
          color="var(--white)"
          fontSize="18px"
        >
          Enviar
        </Button>
      </VStack>
    </>
  );
}

export default CreateActivity;
