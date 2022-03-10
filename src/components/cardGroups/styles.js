import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";

export const CardContainer = styled.div`
  width: 80%;
  margin: 2px;
  padding: 2px;
  height: 80px;
  display: flex;
  background: #efefef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const SubCardContainer = styled(CardContainer)`
  width: 30%;
  align-items: center;
  justify-content: space-around;
  box-shadow: none;
`;

export const CardImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid black;
  margin: 0 10px;
  background-color: blue;
`;

export const Title = styled.h2`
  color: var(--black);
  font-style: normal;
  font-weight: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ExitButton = styled(IoLogOutOutline)`
  width: 35px;
  font-size: 35px;
  margin: 0 10px;
`;
