import React from "react";
import {
  CardContainer,
  CardImage,
  ExitButton,
  SubCardContainer,
  Title,
} from "./styles";


export default function CardGroups() {
  return (
    <CardContainer>
      <SubCardContainer>
        <CardImage />
        <Title>React</Title>
      </SubCardContainer>
      <ExitButton/>     
    </CardContainer>
  );
}
