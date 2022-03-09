import React from "react";
import CardGroups from "../../components/cardGroups";
import { ExitButton } from "../../components/cardGroups/styles";
import Sidebar from "../../components/sidebar";
import {
  Box,
  Container,
  GroupBox,
  InputBox,
  PageTitle,
  SearchInput,
} from "./style";

export default function Groups() {
  return (
    <Container>
      <Sidebar />
      <Box>
        <InputBox>
          <SearchInput
            placeholder="Realize sua busca"
            type={"text"}
          ></SearchInput>
          <ExitButton/>
        </InputBox>
        <GroupBox>
          <PageTitle>Todos os Grupos</PageTitle>
          <CardGroups />
        </GroupBox>
      </Box>
    </Container>
  );
}
