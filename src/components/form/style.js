import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content:center; */
  align-items: center;
  max-height: 500px;
  border-radius: 10px;
  width: 320px;
  background-color: var(--white);
  padding: 10px;
  input {
    height: 50px;
    margin-top: 2vh;
    width: 95%;
    padding: 5px;
    border-radius: 15px;
    background-color: var(--snow);
  }
  input + button {
    background-color: var(--darkBlue);
    width: 95%;
    height: 50px;
    border-radius: 15px;
    margin-top: 3vh;
    color: var(--white);
    font-size: 18px;
  }
  span + button {
    background-color: var(--lightBlue);
    width: 95%;
    height: 50px;
    border-radius: 15px;
    margin-top: 2vh;
    font-size: 18px;
    color: var(--white);
  }
  span {
    margin-top: 2vh;
  }
  @media screen and (min-width: 1100px) {
    width: 350px;
  }
`;
