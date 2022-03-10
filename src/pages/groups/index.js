import { HStack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CardGroups from "../../components/cardGroups";
import { ExitButton } from "../../components/cardGroups/styles";
import Sidebar from "../../components/sidebar";
import api from "../../services";
import {
  Box,
  Container,
  GroupBox,
  InputBox,
  PageTitle,
  SearchInput,
} from "./style";

export default function Groups() {
  const [allGroupsData, setAllGroupsData] = useState([]);
  function getAllGroups() {
    const token = localStorage.getItem("@noteTime:accessToken");
    api
      .get("/group", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAllGroupsData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAllGroups();
  }, []);
  console.log(allGroupsData);

  return (
    <Container>
      <Sidebar />
      <Box>
        <InputBox>
          <SearchInput
            placeholder="Realize sua busca"
            type={"text"}
          ></SearchInput>
          <ExitButton />
        </InputBox>
        <GroupBox>
          <PageTitle>Todos os Grupos</PageTitle>
          <VStack w="100%" alignItems="start" gridGap="10px">
            {" "}
            {allGroupsData.map((item) => (
              <CardGroups key={item.id} item={item} />
            ))}
          </VStack>
        </GroupBox>
      </Box>
    </Container>
  );
}
