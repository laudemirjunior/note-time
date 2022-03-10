import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;

  div {
    display: flex;
    gap: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #0077c0;
    font-size: 28px;
    border-radius: 6px;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 12px;
  margin-top: 10px;

  svg {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    width: 15%;
  }
`;
