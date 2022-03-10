import React from "react";
import Button from "../../components/button";
import CardDevelopers from "../../components/cardDevelopers";
import { developers } from "../../infos";
import { Container, Footer, Header, Illustration, Infos } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <div id="main">
          <div>
            <p onClick={() => navigate("/")}>Logo</p>
          </div>
          <div>
            <p onClick={() => navigate("/login")}>Cadastro</p>
            <p onClick={() => navigate("/login")}>Login</p>
          </div>
        </div>
      </Header>
      <Infos>
        <div id="main">
          <h1>Uma plataforma feita para você, começar a mudar sua vida!</h1>
          <h2>
            Com organização e tempo, acha-se o segredo de fazer tudo e bem
            feito.
          </h2>
          <h3>Pitágoras</h3>
          <Button onClick={() => navigate("/login")}>
            Comece a Organizar Seus estudos!
          </Button>
        </div>
      </Infos>
      <Illustration>
        <div id="main">
          <div>
            <img src={require("../../assets/ideas.png")} alt="ideas" />
          </div>
          <div>
            <h1>O que é Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </div>
        </div>
      </Illustration>
      <Footer>
        <div id="main">
          <div id="title">
            <h1>Desenvolvedores</h1>
          </div>
          <div id="developers">
            {developers.map((item, index) => (
              <CardDevelopers item={item} key={index} />
            ))}
          </div>
        </div>
      </Footer>
    </Container>
  );
}
