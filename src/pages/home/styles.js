import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--snow);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  #main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1440px;
    width: 90%;
    padding: 10px;
    p {
      font-size: 22px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  div:last-child {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const Infos = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1440px;
    width: 90%;
    gap: 30px;
    h1 {
      font-size: 24px;
      font-weight: 500;
    }
    h2 {
      font-size: 24px;
      font-weight: 300;
    }
    h3 {
      font-size: 24px;
      font-weight: 400;
    }
  }
`;

export const Illustration = styled.div`
  display: flex;
  margin: 100px 0;
  #main {
    margin: auto;
    flex-direction: row;
    max-width: 1440px;
    width: 90%;
    gap: 50px;
    @media (max-width: 700px) {
      flex-direction: column;
      img {
        width: 300px;
      }
    }
  }
  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 450px;
  }
`;

export const Footer = styled.div`
  background: linear-gradient(
    150.58deg,
    rgba(15, 176, 176, 0.8) 0%,
    rgba(0, 47, 214, 0.8) 100%
  );
  display: flex;
  justify-content: center;
  #main {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    gap: 20px;
    padding: 30px 0;
  }
  #title {
    text-align: center;
    color: var(--white);
    padding: 10px;
  }
  #developers {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
