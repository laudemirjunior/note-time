import React from "react";
import {
  CardContainer,
  CardImage,
  ExitButton,
  SubCardContainer,
  Title,
} from "./styles";

export default function CardGroups({ item }) {
  return (
    <CardContainer>
      <SubCardContainer>
        <CardImage />
        <Title>{item && item.title}</Title>
      </SubCardContainer>
      <ExitButton />
    </CardContainer>
  );
}
