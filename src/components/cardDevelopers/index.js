import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Container } from "./styles";

export default function CardDevelopers({ item }) {
  return (
    <Container>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.role}</p>
      <div id="link">
        <a href={item.linkedin} target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href={item.github} target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </Container>
  );
}
