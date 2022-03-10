import styled from "styled-components";

export const GeneralDiv = styled.div`
  /* background-color:red; */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    /* display: none; */
  }
`;

export const ImageDiv = styled.div`
  display: none;

  @media screen and (min-width: 1100px) {
    display: flex;
    height: 100vh;
    width: 50%;
    background: linear-gradient(270deg, #456990 0%, rgba(2, 128, 144, 0) 89.4%);
    align-items: center;
    justify-content: center;
    img {
      width: 410px;
      height: 410px;
    }
  }
`;

export const FormDiv = styled.div`
  h1 {
    width: 100%;
    text-align: center;
  }
  @media screen and (min-width: 1100px) {
    width: 50%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
