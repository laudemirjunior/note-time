import React from "react";
import CardGroups from "../../components/cardGroups";
import Sidebar from "../../components/sidebar";
import { Box, Container } from "./style";

export default function Groups() {
  return (
    <Container>
      <Sidebar />
      <Box>
          
          <CardGroups/>
      </Box>
    </Container>
  );
}
