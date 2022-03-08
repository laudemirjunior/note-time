import React from "react";
import { Container } from "./styles";
import {
  AiFillTrophy,
  AiFillFolder,
  AiOutlineGroup,
  AiOutlineTeam,
  AiFillEdit,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function SadBar() {
  const navigate = useNavigate();

  return (
    <Container>
      <div id="links">
        <div onClick={() => navigate("/")}>
          <AiFillFolder />
          <p>Atividades</p>
        </div>
        <div onClick={() => navigate("/")}>
          <AiFillTrophy />
          <p>Classificação</p>
        </div>
        <div onClick={() => navigate("/")}>
          <AiOutlineTeam />
          <p>Meus grupos</p>
        </div>
        <div onClick={() => navigate("/")}>
          <AiOutlineGroup />
          <p>Todos os grupos</p>
        </div>
      </div>
      <div id="user">
        <div>
          <div />
          <p>Gabriel</p>
          <a>
            <AiFillEdit />
          </a>
        </div>
      </div>
    </Container>
  );
}