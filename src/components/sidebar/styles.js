import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 320px;
  background: linear-gradient(
    150.58deg,
    rgba(15, 176, 176, 0.8) 0%,
    rgba(0, 47, 214, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  #links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    div {
      display: flex;
      width: 200px;
      gap: 10px;
      font-size: 20px;
      color: var(--white);

      cursor: pointer;
    }
  }
  #user {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 200px;
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      p {
        font-size: 20px;
        color: var(--white);
      }
    }
  }
`;
