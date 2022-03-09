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
} from "../groups/style";

export default function MyGroups() {
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
          <PageTitle>Meus Grupos</PageTitle>
          <CardGroups />
        </GroupBox>
      </Box>
    </Container>
  );
}
