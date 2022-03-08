import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  gap: 10px;
  margin-top: 15px;

  div {
    display: flex;
    justify-content: space-between;
  }

  p,
  h3 {
    color: #808080;
    font-weight: 500;
  }
`;

export const Timer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #0077c0;
  align-items: center;
  height: 70px;
  border-radius: 0px 0px 8px 8px;

  div {
    display: flex;
    gap: 15px;
  }

  svg,
  p {
    color: #ffffff;
  }
`;
