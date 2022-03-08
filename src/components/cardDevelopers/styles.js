import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--white);
  width: 190px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  a {
    color: var(--white);
  }

  #link {
    display: flex;
    flex-direction: row;
    gap: 10px;
    svg {
      font-size: 24px;
    }
  }
`;
